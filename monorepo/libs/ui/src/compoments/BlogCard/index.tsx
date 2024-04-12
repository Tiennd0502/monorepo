import { memo } from 'react';
import { Stack, XStack, Image } from 'tamagui';
import isEqual from 'react-fast-compare';

// Types
import { Blog } from '@monorepo/types';

// Constants
import { AVATAR_DEFAULT } from '@monorepo/constants';

// Components
import Text from '../Text';
import Rating from '../Rating';
import { shadows } from '../../themes';

interface BlogCardProps {
  isReview?: boolean;
  item: Blog;
  onPress: () => void;
}

const BlogCard = ({
  isReview = false,
  item: { price, title, image, evaluate, createdAt, description },
  onPress,
}: BlogCardProps) => (
  <Stack
    backgroundColor="$secondary"
    borderRadius="$2"
    padding="$5"
    style={shadows.card}
    onPress={onPress}
  >
    {isReview ? (
      <Image
        position="absolute"
        alignSelf="center"
        top={-20}
        width="$10"
        height="$10"
        borderRadius="$full"
        source={{ uri: image || AVATAR_DEFAULT }}
      />
    ) : (
      <XStack gap="$5" marginBottom="$5">
        <Image
          width="$17.5"
          height="$17.5"
          borderRadius="$2"
          source={{ uri: image || AVATAR_DEFAULT }}
        />
        <Stack flex={1} gap="$1.5">
          <Text
            size="extraMedium"
            color="$textQuaternary"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          {price && (
            <Text color="$primary" fontWeight="bold">
              {price}
            </Text>
          )}
        </Stack>
      </XStack>
    )}
    <XStack justifyContent="space-between" marginBottom="$2">
      <Stack rowGap={5}>
        {isReview && (
          <Text color="$primary" numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
        )}
        <Rating value={evaluate} />
      </Stack>
      <Text fontSize="$3" color="$textLabel">
        {createdAt}
      </Text>
    </XStack>
    <Text
      color="$primary"
      numberOfLines={5}
      ellipsizeMode="tail"
      textAlign="justify"
    >
      {description}
    </Text>
  </Stack>
);

export default memo(BlogCard, isEqual);
