import { useMemo, useCallback } from 'react';
import { Stack, ScrollView } from 'tamagui';

// Types
import { SCREENS, StackScreenProps } from '../../types';
import { ProductResponse } from '@monorepo/types';

// Constants
import { INIT_PAGE } from '@monorepo/constants';

// Utils
import { formatReviews, getData } from '@monorepo/utils';

// Hooks
import { useProducts } from '@monorepo/hooks';

// Components
import {
  BlogCard,
  ChevronLeftIcon,
  Header,
  Loading,
  SearchIcon,
} from '@monorepo/ui';

interface ReviewProps {
  navigation: StackScreenProps;
}

const Review = ({ navigation }: ReviewProps) => {
  const { useFetchProducts } = useProducts();
  const { data, isPending } = useFetchProducts(INIT_PAGE);
  const pages = useMemo(() => data?.pages || [], [data?.pages]);
  const products = useMemo(
    () => (pages.length > 0 && getData<ProductResponse>(pages)) || [],
    [pages]
  );

  const reviewsFormat = useMemo(
    () =>
      (products.length > 0 && formatReviews(products as ProductResponse[])) ||
      [],
    [products]
  );

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const handleViewDetail = useCallback(
    (item) => navigation.navigate(SCREENS.REVIEW_DETAIL, { item }),
    [navigation]
  );

  return (
    <Stack flex={1} backgroundColor="$secondary">
      {isPending && <Loading />}
      <Stack paddingHorizontal={20} paddingVertical={15}>
        <Header
          title="My reviews"
          startIcon={<ChevronLeftIcon onPress={handleGoBack} />}
          endIcon={<SearchIcon />}
        />
      </Stack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack padding="$5" gap="$8">
          {reviewsFormat.map((item) => (
            <BlogCard
              key={item.id}
              item={item}
              onPress={() => handleViewDetail(item)}
            />
          ))}
        </Stack>
      </ScrollView>
    </Stack>
  );
};

export default Review;
