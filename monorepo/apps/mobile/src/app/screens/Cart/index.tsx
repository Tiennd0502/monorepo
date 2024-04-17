import { ScrollView } from 'react-native';
import { useCallback, useMemo } from 'react';
import { Stack, XStack } from 'tamagui';

// Types
import { SCREENS, StackScreenProps } from '../../types';
import { ErrorResponse, OrderPayload } from '@monorepo/types';

// Constants
import { CHECK_OUT, CURRENCY_UNIT } from '@monorepo/constants';

// Utils
import { formatCartDetails } from '@monorepo/utils';

// Hooks | Stores
import { useCart } from '@monorepo/hooks';

// Themes | Components
import { DiscountCode, Text, Button, CartItem, Divider } from '@monorepo/ui';
import { useToastStore } from '@monorepo/stores';
import { MainLayout } from '../../components';

interface CartProps {
  navigation: StackScreenProps;
}

const Cart = ({ navigation }: CartProps) => {
  const [showToast] = useToastStore((state) => [state.showToast]);

  const {
    useFetchCarts,
    removeCartItem: { mutate: removeCartItem, isPending: isRemoving },
    addCart: { mutate: updateCart, isPending: isAddingCard },
    checkOut: { mutate: checkOut, isPending: isPendingCheckOut },
  } = useCart();

  const { data, refetch, isLoading: isLoadingCarts } = useFetchCarts();

  const cartDetails = useMemo(
    () => data?.data?.cart_details || [],
    [data?.data?.cart_details]
  );
  const totalPayment = data?.data?.cart?.grand_total?.amount || 0;

  const carts = useMemo(
    () => (cartDetails?.length ? formatCartDetails(cartDetails) : []),
    [cartDetails]
  );

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
    },
    [refetch, removeCartItem, showToast]
  );

  const handleCheckout = useCallback(() => {
    const payload: OrderPayload = { order: CHECK_OUT };

    checkOut(payload, {
      onSuccess: ({ data }) => {
        const { order_reference } = data;
        navigation.navigate(SCREENS.CHECK_OUT, { id: order_reference });
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
  }, [checkOut, showToast, navigation]);

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
    },
    [refetch, showToast, updateCart]
  );

  const isLoading =
    isLoadingCarts || isAddingCard || isRemoving || isPendingCheckOut;

  return (
    <MainLayout isLoading={isLoading}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
      <Stack gap="$2.5">
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
        <Button disabled={!carts?.length} onPress={handleCheckout}>
          Check out
        </Button>
      </Stack>
    </MainLayout>
  );
};

export default Cart;
