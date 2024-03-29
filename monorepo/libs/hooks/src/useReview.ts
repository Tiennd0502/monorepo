import { useMutation, useQuery } from '@tanstack/react-query';

// Constants
import { API_PATH } from '@monorepo/constants';

// Types
import { APIResponse, Review, ReviewResponse } from '@monorepo/types';

// Utils
import { GET, POST } from '@monorepo/utils';

// Stores
import { authStore } from '@monorepo/stores';

export const useReview = () => {
  const [authKey] = authStore((state) => [state.authKey]);

  const useFetchReview = (type: string, id: string) =>
    useQuery({
      queryKey: [API_PATH.CART],
      queryFn: () =>
        GET<APIResponse<ReviewResponse>>(
          `${API_PATH.REVIEWS}?type=${type}&id=${id}&page=1&has_images=false`,
          {
            headers: {
              'X-Auth-Key': `${authKey?.auth_key}`,
            },
          }
        ),
      enabled: !!id,
    });

  const addReview = useMutation({
    mutationFn: (data: Review) =>
      POST<APIResponse<object>, Review>(API_PATH.REVIEWS, data, {
        headers: {
          'X-Auth-Key': `${authKey?.auth_key}`,
        },
      }),
  });

  return { useFetchReview, addReview };
};
