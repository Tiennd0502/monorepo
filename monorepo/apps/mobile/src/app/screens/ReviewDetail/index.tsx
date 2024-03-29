import { memo, useCallback, useMemo } from 'react';
import { Image, ScrollView, Stack, XStack } from 'tamagui';
// Types
import { REVIEW_TYPES } from '@monorepo/types';

// Constants
import { AVATAR_DEFAULT } from '@monorepo/constants';

// Utils
import { formatUserReviews } from '@monorepo/utils';

// Hooks
import { useReview } from '@monorepo/hooks';

// Components
import {
  BlogCard,
  Button,
  ChevronLeftIcon,
  Divider,
  Header,
  Loading,
  Rating,
  SearchIcon,
  Text,
} from '@monorepo/ui';

// TODO: Update when ui create review ready
const REVIEW_CONTENT = {
  type: REVIEW_TYPES.LISTINGS,
  title: 'Some optional title' + new Date().getTime(),
  content: 'Some optional description color Red, Green',
  rating: 5,
};

const ReviewDetail = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const { id = '', image = '', title = '' } = item || {};

  const {
    useFetchReview,
    addReview: { mutate: addReview, isPending },
  } = useReview();

  const { data, isFetching } = useFetchReview(REVIEW_TYPES.LISTINGS, id);
  const { rating_average = 0, review_count = 0 } =
    data?.data?.rating_data || {};
  const reviews = useMemo(
    () => data?.data?.reviews || [],
    [data?.data?.reviews]
  );

  const reviewList = useMemo(() => formatUserReviews(reviews), [reviews]);

  const handleViewDetail = useCallback(() => null, []);

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const handleWriteReview = useCallback(() => {
    if (id) {
      const payload = { review: { id, ...REVIEW_CONTENT } };

      addReview(payload, {
        onSuccess: () => null,
        onError: (error) => {
          console.log(error);
        },
      });
    }
  }, [addReview, id]);

  return (
    <Stack flex={1} backgroundColor="$secondary" position="relative">
      {(isPending || isFetching) && <Loading />}
      <Stack paddingHorizontal="$5" paddingVertical="$3.75">
        <Header
          title="Rating & Review"
          startIcon={<ChevronLeftIcon onPress={handleGoBack} />}
          endIcon={<SearchIcon />}
        />
      </Stack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack>
          <XStack paddingHorizontal="$5" paddingVertical="$4" gap="$5">
            <Image
              height="$25"
              width="$25"
              borderRadius="$2"
              source={{ uri: image || AVATAR_DEFAULT }}
            />
            <Stack justifyContent="space-between">
              <Text color="$primary" numberOfLines={2} ellipsizeMode="tail">
                {title}
              </Text>
              <XStack alignItems="center" alignContent="center" gap="$1.5">
                <Rating size="$6" value={rating_average} count={1} />
                <Text color="$primary" fontWeight="bold" size="extraLarge">
                  {rating_average}
                </Text>
              </XStack>
              <Text
                color="$primary"
                size="large"
              >{`${review_count} reviews`}</Text>
            </Stack>
          </XStack>
          <Stack paddingTop="$2.5">
            <Divider color="$backgroundTertiary" />
          </Stack>
          <Stack paddingHorizontal="$5" paddingVertical="$10" gap="$10">
            {reviewList?.map((item) => (
              <BlogCard
                key={item.id}
                isReview
                item={item}
                onPress={handleViewDetail}
              />
            ))}
          </Stack>
        </Stack>
      </ScrollView>
      <Stack
        padding="$5"
        width="100%"
        position="absolute"
        zIndex="$5"
        bottom={0}
      >
        <Button disabled={isPending} size="lg" onPress={handleWriteReview}>
          Write a review
        </Button>
      </Stack>
    </Stack>
  );
};

export default memo(ReviewDetail);
