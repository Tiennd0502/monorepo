import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

// Constants
import { API_PATH } from '@monorepo/constants';

// Utils
import { GET, POST } from '@monorepo/utils';

// Types
import {
  ADDRESS_TYPE,
  APIResponse,
  ShippingAddressPayload,
  ShippingAddress,
} from '@monorepo/types';

// Stores
import { authStore } from '@monorepo/stores';

export const useShippingAddress = () => {
  const [authKey] = authStore((state) => [state.authKey]);

  const useFetchShippingAddresses = (
    initPageParam: number,
    addressType: ADDRESS_TYPE
  ) => {
    return useInfiniteQuery({
      queryKey: [API_PATH.ADDRESSES],
      queryFn: ({ pageParam }) =>
        GET<APIResponse<ShippingAddress[]>>(
          `${API_PATH.ADDRESSES}?type=${addressType}&page=${pageParam}&per_page=6`,
          {
            headers: {
              'X-Auth-Key': `${authKey?.auth_key}`,
            },
          }
        ),
      initialPageParam: initPageParam,
      getNextPageParam: (lastPage) => {
        const { data } = lastPage || {};
        const { listings, page } = data || {};
        const nextPage = page + 1;

        return listings?.length > 0 && listings?.length === 6 ? nextPage : null;
      },
    });
  };

  const add = useMutation({
    mutationFn: (data: ShippingAddressPayload) =>
      POST<APIResponse<ShippingAddress>, ShippingAddressPayload>(
        API_PATH.ADDRESSES,
        data,
        {
          headers: {
            'X-Auth-Key': `${authKey?.auth_key}`,
          },
        }
      ),
  });

  return { useFetchShippingAddresses, add };
};
