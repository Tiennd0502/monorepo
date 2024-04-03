import { useInfiniteQuery } from '@tanstack/react-query';

// Constants
import { API_PATH } from '@monorepo/constants';

// Types
import { APIResponse, Product } from '@monorepo/types';

// Services
import { GET } from '@monorepo/utils';

export const useProducts = () => {
  const useFetchProducts = (initPageParam: number) => {
    return useInfiniteQuery({
      queryKey: [API_PATH.PRODUCT],
      queryFn: ({ pageParam }) => {
        return GET<APIResponse<Product[]>>(
          `${API_PATH.PRODUCT}?page=${pageParam}&per_page=6`
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
