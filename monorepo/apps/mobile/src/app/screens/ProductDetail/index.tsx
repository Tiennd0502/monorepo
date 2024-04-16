import { useCallback, useMemo, useState } from 'react';
import { Stack, ScrollView, XStack } from 'tamagui';
import FastImage from 'react-native-fast-image';

// Types
import { SCREENS, StackScreenProps } from '../../types';
import { ErrorResponse, Product } from '@monorepo/types';

// Constants
import {
  PRODUCT_COLORS,
  DEFAULT_PRODUCT_IMAGE,
  CURRENCY_UNIT,
} from '@monorepo/constants';

// Hooks | Stores
import { useCart } from '@monorepo/hooks';

// Themes | Components
import {
  Button,
  ChevronLeftIcon,
  FavoriteIcon,
  IconButton,
  Quantity,
  Rating,
  Text,
  shadows,
} from '@monorepo/ui';
import { useToastStore } from '@monorepo/stores';
import { MainLayout } from '../../components';
import { hs, vs } from '../../utils';

interface ProductDetailProps {
  navigation: StackScreenProps;
  route: {
    params: {
      product: Product;
    };
  };
}

const ProductDetail = ({ navigation, route }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(PRODUCT_COLORS[0]);

  const [showToast] = useToastStore((state) => [state.showToast]);

  const { product } = route.params || {};
  const { name, image, description, price, id = '', rating } = product || {};
  const { amount = '' } = price || {};

  const {
    addCart: { mutate: addCart, isPending },
  } = useCart();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleChangeQuantity = useCallback(
    (value: number) => setQuantity(value),
    []
  );

  const handleAddToCart = useCallback(() => {
    if (id) {
      const payload = {
        cart: {
          listing_id: id,
          quantity: quantity,
        },
      };

      addCart(payload, {
        onSuccess: () => {
          navigation.navigate(SCREENS.CART);
        },
        onError: (error: ErrorResponse) => {
          const {
            error: { message },
          } = error.response.data;

          showToast({
            variant: 'error',
            message,
          });
        },
      });
    }
  }, [addCart, id, navigation, showToast, quantity]);

  const handleClickFavorite = () => null;

  const renderSelectColor = useMemo(
    () => (
      <Stack
        position="absolute"
        left={hs('$4')}
        top={hs('$34')}
        zIndex="$5"
        width={hs('$16')}
        padding={hs('$3.75')}
        height={hs('$48')}
        borderRadius={hs('$10')}
        backgroundColor="$secondary"
        justifyContent="center"
        alignItems="center"
        gap="$3"
        style={shadows.default}
      >
        {PRODUCT_COLORS.map((color) => {
          const handleChangeActiveColor = () => setActiveColor(color);

          const bgColor =
            color === activeColor
              ? '$backgroundDisabled'
              : '$backgroundTertiary';

          return (
            <Stack
              key={color}
              backgroundColor={bgColor}
              width={hs('$8.5')}
              height={hs('$8.5')}
              borderRadius={hs('$8.5')}
              justifyContent="center"
              alignItems="center"
              onPress={handleChangeActiveColor}
            >
              <Stack
                width={hs('$6')}
                height={hs('$6')}
                borderRadius={hs('$6')}
                backgroundColor={color}
              />
            </Stack>
          );
        })}
      </Stack>
    ),
    [activeColor]
  );

  return (
    <MainLayout isLoading={isPending} padding={0}>
      <IconButton
        position="absolute"
        top="$9"
        left="$6"
        zIndex="$4"
        padding="$2.5"
        backgroundColor="$secondary"
        style={shadows.default}
        onPress={handleGoBack}
      >
        <ChevronLeftIcon />
      </IconButton>
      <ScrollView
        flex={1}
        position="relative"
        backgroundColor="$secondary"
        showsVerticalScrollIndicator={false}
      >
        <Stack paddingLeft="$11.5">
          <FastImage
            style={{
              width: '100%',
              height: vs(445),
              borderBottomLeftRadius: hs(60),
            }}
            source={{
              uri: image || DEFAULT_PRODUCT_IMAGE,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          {renderSelectColor}
        </Stack>
        <Stack padding={hs('$7.5')} gap="$4">
          <Text size="extraLarge" color="$primary">
            {name}
          </Text>
          <XStack justifyContent="space-between">
            <Text size="huge" color="$primary">
              {CURRENCY_UNIT} {amount}
            </Text>
            <Quantity defaultValue={1} onChangeValue={handleChangeQuantity} />
          </XStack>
          <XStack gap="$2" alignItems="center">
            <Rating size={20} value={+rating} count={1} />
            <Text size="large" fontWeight="bold" color="$primary">
              {rating}
            </Text>
            <Text>(reviews)</Text>
          </XStack>
          <Text textAlign="justify">{description}</Text>
          <XStack gap="$5">
            <Button
              height={hs('$15')}
              width={hs('$15')}
              variant="chromeless"
              justifyContent="center"
              alignItems="center"
              backgroundColor="$backgroundTertiary"
              onPress={handleClickFavorite}
            >
              <FavoriteIcon color="$primary" />
            </Button>
            <Button
              flex={1}
              testID="add-to-cart"
              size="xl"
              onPress={handleAddToCart}
            >
              Add to Cart
            </Button>
          </XStack>
        </Stack>
      </ScrollView>
    </MainLayout>
  );
};

export default ProductDetail;
