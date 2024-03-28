import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

// Types
import { APIResponse, Layer } from '@monorepo/types';

// Constants
import { API_PATH } from '@monorepo/constants';

// Utils
import { GET, POST } from '@monorepo/utils';

// Stores
import { authStore } from '@monorepo/stores';

export const usePayment = () => {
  const [authKey] = authStore((state) => [state.authKey]);

  const useFetchPayments = (initPageParam: number) => {
    return useInfiniteQuery({
      queryKey: [API_PATH.LAYERS],
      queryFn: ({ pageParam }) =>
        GET<APIResponse<Layer[]>>(
          `${API_PATH.LAYERS}?page=${pageParam}&per_page=6`,
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
    mutationFn: (data: Layer) =>
      POST<APIResponse<Layer>, Layer>(API_PATH.LAYERS, data, {
        headers: {
          'X-Auth-Key': `${authKey?.auth_key}`,
        },
      }),
  });

  return { useFetchPayments, add };
};
