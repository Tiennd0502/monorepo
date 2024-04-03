import { useMutation, useQuery } from '@tanstack/react-query';

// Constants
import { API_PATH } from '@monorepo/constants';

// Types
import {
  APIResponse,
  Cart,
  ConfirmOrder,
  ConfirmOrderPayload,
  OrderDetailResponse,
  OrdersResponse,
} from '@monorepo/types';

// Services
import { GET, PATCH } from '@monorepo/utils';

export const useOrder = () => {
  const useFetchOrders = ({ page = 1, status = 0 }) =>
    useQuery({
      queryKey: [API_PATH.ORDERS],
      queryFn: () =>
        GET<APIResponse<OrdersResponse>>(
          `${API_PATH.ORDERS}?page=${page}${
            status ? '&order_status=' + status : ''
          }`
        ),
      retry: false,
    });

  const useFetchOrder = (id: string) =>
    useQuery({
      queryKey: [`${API_PATH.ORDERS}/${id}`],
      queryFn: () =>
        GET<APIResponse<OrderDetailResponse>>(`${API_PATH.ORDERS}/${id}`),
      retry: false,
      enabled: !!id,
    });

  const confirmOrder = useMutation({
    mutationFn: ({ id, order }: ConfirmOrderPayload) =>
      PATCH<Cart, ConfirmOrder>(`${API_PATH.ORDERS}/${id}/confirm`, { order }),
  });

  return { useFetchOrders, useFetchOrder, confirmOrder };
};
