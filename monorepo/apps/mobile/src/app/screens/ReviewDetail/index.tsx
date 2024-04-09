import { useCallback, useMemo } from 'react';
import { ScrollView, Stack, XStack } from 'tamagui';
import FastImage from 'react-native-fast-image';

// Types
import { StackScreenProps } from '../../types';
import { REVIEW_TYPES, Blog } from '@monorepo/types';

// Constants
import { DEFAULT_PRODUCT_IMAGE } from '@monorepo/constants';

// Utils
import { formatUserReviews } from '@monorepo/utils';

// Hooks
import { useReview } from '@monorepo/hooks';

// Components
import { BlogCard, Button, Divider, Loading, Rating, Text } from '@monorepo/ui';

// TODO: Update when ui create review ready
const REVIEW_CONTENT = {
  type: REVIEW_TYPES.LISTINGS,
  title: 'Some optional title' + new Date().getTime(),
  content: 'Some optional description color Red, Green',
  rating: 5,
};

interface ReviewDetailProps {
  navigation: StackScreenProps;
  route: {
    params: {
      item: Blog;
    };
  };
}

const ReviewDetail = ({ navigation, route }: ReviewDetailProps) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack>
          <XStack paddingHorizontal="$5" paddingVertical="$4" gap="$5">
            <FastImage
              style={{
                width: 100,
                height: 100,
                borderRadius: 8,
              }}
              source={{
                uri: image || DEFAULT_PRODUCT_IMAGE,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
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

export default ReviewDetail;
