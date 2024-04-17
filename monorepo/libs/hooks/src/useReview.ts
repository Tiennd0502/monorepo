import { useMutation, useQuery } from '@tanstack/react-query';

// Constants
import { API_PATH } from '@monorepo/constants';

// Types
import { APIResponse, Review, ReviewResponse } from '@monorepo/types';

// Utils
import { GET, POST } from '@monorepo/utils';
import { queryClient } from '@monorepo/provider';

export const useReview = () => {
  const useFetchReview = (type: string, id: string) =>
    useQuery({
      queryKey: [API_PATH.CART],
      queryFn: ({ signal }) =>
        GET<APIResponse<ReviewResponse>>(
          `${API_PATH.REVIEWS}?type=${type}&id=${id}&page=1&has_images=false`,
          { signal }
        ),
      enabled: !!id,
      retry: false,
      staleTime: 1000,
      initialData: () => queryClient.getQueryData([API_PATH.CART]),
    });

  const addReview = useMutation({
    mutationFn: (data: Review) =>
      POST<APIResponse<object>, Review>(API_PATH.REVIEWS, data),
  });

  return { useFetchReview, addReview };
};
