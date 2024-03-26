import { useCallback, useMemo, useState } from 'react';
import { Stack, ScrollView, Image, XStack } from 'tamagui';

// Types
import { SCREENS } from '../../types';

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
  Loading,
  Quantity,
  Rating,
  Text,
  shadows,
} from '@monorepo/ui';

const ProductDetail = ({ navigation, route }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(PRODUCT_COLORS[0]);

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
        onError: (error) => {
          console.log(error);
        },
      });
    }
  }, [addCart, id, navigation, quantity]);

  const handleClickFavorite = () => null;

  const renderSelectColor = useMemo(
    () => (
      <Stack
        position="absolute"
        left="$4"
        top="$34"
        zIndex={99999}
        width="$16"
        padding="$3.75"
        height="$48"
        borderRadius="$10"
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
              width="$8.5"
              height="$8.5"
              borderRadius="$8.5"
              justifyContent="center"
              alignItems="center"
              onPress={handleChangeActiveColor}
            >
              <Stack
                width="$6"
                height="$6"
                borderRadius="$6"
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
    <ScrollView
      flex={1}
      position="relative"
      backgroundColor="$secondary"
      showsVerticalScrollIndicator={false}
    >
      {isPending && <Loading />}
      <IconButton
        position="absolute"
        top="$9"
        left="$6"
        zIndex="$5"
        padding="$2.5"
        backgroundColor="$secondary"
        style={shadows.default}
        onPress={handleGoBack}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Stack paddingLeft="$11.5">
        <Image
          resizeMode="cover"
          width="100%"
          borderBottomLeftRadius="$15"
          height={445}
          source={{ uri: image || DEFAULT_PRODUCT_IMAGE }}
        />
        {renderSelectColor}
      </Stack>
      <Stack padding="$7.5" gap="$4">
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
            height="$15"
            width="$15"
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
  );
};

export default ProductDetail;