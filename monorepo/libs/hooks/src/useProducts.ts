import { useInfiniteQuery } from '@tanstack/react-query';

// Constants
import { API_PATH } from '@monorepo/constants';

// Types
import { APIResponse, Product } from '@monorepo/types';

// Services
import { GET } from '@monorepo/utils';

// Stores
import { authStore } from '@monorepo/stores';

export const useProducts = () => {
  const [authKey] = authStore((state) => [state.authKey]);

  const useFetchProducts = (initPageParam: number) => {
    return useInfiniteQuery({
      queryKey: [API_PATH.PRODUCT],
      queryFn: ({ pageParam }) => {
        return GET<APIResponse<Product[]>>(
          `${API_PATH.PRODUCT}?page=${pageParam}&per_page=6`,
          {
            headers: {
              'X-Auth-Key': `${authKey?.auth_key}`,
            },
          }
        );
      },
      initialPageParam: initPageParam,
      getNextPageParam: (lastPage) => {
        const { data } = lastPage || {};
        const { listings, page } = data || {};
        const nextPage = page + 1;

        return listings?.length > 0 && listings?.length === 6 ? nextPage : null;
      },
    });
  };

  return { useFetchProducts };
};
