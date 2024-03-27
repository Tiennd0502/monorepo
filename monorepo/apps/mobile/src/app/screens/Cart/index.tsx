import { ScrollView } from 'react-native';
import { useCallback, useMemo } from 'react';
import { Stack, XStack } from 'tamagui';

// Types
import { SCREENS } from '../../types';
import { OrderPayload } from '@monorepo/types';

// Constants
import { CHECK_OUT, CURRENCY_UNIT } from '@monorepo/constants';

// Utils
import { formatCartDetails } from '@monorepo/utils';

// Hooks | Stores
import { useCart } from '@monorepo/hooks';

// Themes | Components
import {
  DiscountCode,
  Text,
  Button,
  CartItem,
  ChevronLeftIcon,
  Divider,
  Header,
  Loading,
} from '@monorepo/ui';

const Cart = ({ navigation }) => {
  const {
    useFetchCarts,
    removeCartItem: { mutate: removeCartItem },
    addCart: { mutate: updateCart },
    checkOut: { mutate: checkOut, isPending: isPendingCheckOut },
  } = useCart();

  const { data, refetch, isPending, isFetching } = useFetchCarts();

  const cartDetails = useMemo(
    () => data?.data?.cart_details || [],
    [data?.data?.cart_details]
  );
  const totalPayment = data?.data?.cart?.grand_total?.amount || 0;

  const carts = useMemo(
    () => (cartDetails?.length ? formatCartDetails(cartDetails) : []),
    [cartDetails]
  );

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const handleSubmitDiscountCode = useCallback(() => null, []);

  const handleRemoveCartItem = useCallback(
    (id: string) => {
      const payload = {
        cart: {
          listing_id: [id],
        },
      };

      removeCartItem(payload, {
        onSuccess: () => refetch(),
        onError: (error) => {
          console.log(error);
        },
      });
    },
    [refetch, removeCartItem]
  );

  const handleCheckout = useCallback(() => {
    const payload: OrderPayload = { order: CHECK_OUT };

    checkOut(payload, {
      onSuccess: ({ data }) => {
        const { order_reference } = data;
        navigation.navigate(SCREENS.CHECK_OUT, { id: order_reference });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }, [checkOut, navigation]);

  const handleUpdateCartItem = useCallback(
    (productId: string, quantity: number) => {
      const payload = {
        cart: {
          listing_id: productId,
          quantity: quantity,
        },
      };

      updateCart(payload, {
        onSuccess: () => {
          refetch();
        },
        onError: (error) => {
          console.log(error);
        },
      });
    },
    [refetch, updateCart]
  );

  const isLoading = isFetching || isPending || isPendingCheckOut;

  return (
    <Stack
      flex={1}
      backgroundColor="$secondary"
      paddingHorizontal="$5"
      paddingTop="$2.5"
      paddingBottom="$5"
      rowGap="$2.5"
    >
      {isLoading && <Loading />}
      <Header
        title="My cart"
        startIcon={<ChevronLeftIcon onPress={handleGoBack} />}
      />
      <Stack flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Stack>
            {carts?.map(({ item, quantity }, index) => {
              const handleChangeQuantity = (amount: number) =>
                handleUpdateCartItem(item.id, amount);

              return (
                <Stack key={index}>
                  <CartItem
                    item={item}
                    quantity={quantity}
                    onDelete={handleRemoveCartItem}
                    onChangeQuantity={handleChangeQuantity}
                  />
                  {index < carts.length - 1 && (
                    <Divider color="$backgroundTertiary" />
                  )}
                </Stack>
              );
            })}
          </Stack>
        </ScrollView>
      </Stack>
      <Stack gap="$2.5" paddingTop="$2.5">
        <DiscountCode onSubmit={handleSubmitDiscountCode} />
        <XStack
          paddingTop="$15"
          paddingBottom="$5"
          justifyContent="space-between"
          backgroundColor="$secondary"
        >
          <Text fontSize="$5" color="$textLabel" fontWeight="bold">
            Total:
          </Text>
          <Text fontSize="$5" color="$primary" fontWeight="bold">
            {CURRENCY_UNIT} {totalPayment.toString()}
          </Text>
        </XStack>
        <Button onPress={handleCheckout}>Check out</Button>
      </Stack>
    </Stack>
  );
};

export default Cart;
