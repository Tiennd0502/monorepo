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

export const useCart = () => {
  const useFetchCarts = () =>
    useQuery({
      queryKey: [API_PATH.CART],
      queryFn: () =>
        GET<APIResponse<CartResponse>>(API_PATH.CART, {
          headers: {
            'X-Currency': 'USD',
          },
        }),
      retry: 1,
    });

  const addCart = useMutation({
    mutationFn: (data: CartPayload) =>
      POST<Cart, CartPayload>(API_PATH.CART, data),
  });

  const removeCartItem = useMutation({
    mutationFn: (data: CartPayload) =>
      PATCH<Cart, CartPayload>(API_PATH.CART, data),
  });

  const checkOut = useMutation({
    mutationFn: (data: OrderPayload) =>
      POST<APIResponse<OrderReference>, OrderPayload>(API_PATH.CHECKOUT, data),
  });

  return { useFetchCarts, addCart, removeCartItem, checkOut };
};
