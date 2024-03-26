import { useMutation, useQuery } from '@tanstack/react-query';

// Constants
import { API_PATH } from '@monorepo/constants';

// Types
import {
  APIResponse,
  Cart,
  CartPayload,
  CartResponse,
  OrderPayload,
  OrderReference,
} from '@monorepo/types';

// Services
import { GET, PATCH, POST } from '@monorepo/utils';

// Stores
import { authStore } from '@monorepo/stores';

export const useCart = () => {
  const [authKey] = authStore((state) => [state.authKey]);

  const useFetchCarts = () =>
    useQuery({
      queryKey: [API_PATH.CART],
      queryFn: () =>
        GET<APIResponse<CartResponse>>(API_PATH.CART, {
          headers: {
            'X-Auth-Key': `${authKey?.auth_key}`,
            'X-Currency': 'USD',
          },
        }),
    });

  const addCart = useMutation({
    mutationFn: (data: CartPayload) =>
      POST<Cart, CartPayload>(API_PATH.CART, data, {
        headers: {
          'X-Auth-Key': `${authKey?.auth_key}`,
        },
      }),
  });

  const removeCartItem = useMutation({
    mutationFn: (data: CartPayload) =>
      PATCH<Cart, CartPayload>(API_PATH.CART, data, {
        headers: {
          'X-Auth-Key': `${authKey?.auth_key}`,
        },
      }),
  });

  const checkOut = useMutation({
    mutationFn: (data: OrderPayload) =>
      POST<APIResponse<OrderReference>, OrderPayload>(API_PATH.CHECKOUT, data, {
        headers: {
          'X-Auth-Key': `${authKey?.auth_key}`,
        },
      }),
  });

  return { useFetchCarts, addCart, removeCartItem, checkOut };
};
