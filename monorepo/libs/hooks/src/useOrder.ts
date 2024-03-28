import { useMutation, useQuery } from '@tanstack/react-query';

// Constants
import { API_PATH } from '@monorepo/constants';

// Types
import {
  APIResponse,
  Cart,
  ConfirmOrder,
  ConfirmOrderPayload,
  OrderResponse,
  OrdersResponse,
} from '@monorepo/types';

// Services
import { GET, PATCH } from '@monorepo/utils';

// Stores
import { authStore } from '@monorepo/stores';

export const useOrder = () => {
  const [authKey] = authStore((state) => [state.authKey]);

  const useFetchOrders = ({ page = 1 }) =>
    useQuery({
      queryKey: [API_PATH.ORDERS],
      queryFn: () =>
        GET<OrdersResponse>(`${API_PATH.ORDERS}?page=${page}`, {
          headers: {
            'X-Auth-Key': `${authKey?.auth_key}`,
          },
        }),
      retry: false,
    });

  const useFetchOrder = (id: string) =>
    useQuery({
      queryKey: [`${API_PATH.ORDERS}/${id}`],
      queryFn: () =>
        GET<APIResponse<OrderResponse>>(`${API_PATH.ORDERS}/${id}`, {
          headers: {
            'X-Auth-Key': `${authKey?.auth_key}`,
          },
        }),
      retry: false,
      enabled: !!id,
    });

  const confirmOrder = useMutation({
    mutationFn: ({ id, order }: ConfirmOrderPayload) =>
      PATCH<Cart, ConfirmOrder>(
        `${API_PATH.ORDERS}/${id}/confirm`,
        { order },
        {
          headers: {
            'X-Auth-Key': `${authKey?.auth_key}`,
          },
        }
      ),
  });

  return { useFetchOrders, useFetchOrder, confirmOrder };
};
