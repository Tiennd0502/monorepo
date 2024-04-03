import { memo } from 'react';

import { StarIcon } from '../icons';
import { XStack } from 'tamagui';

interface RatingProps {
  value: number;
  size?: number | string;
  count?: number;
}

const Rating = ({ value, size, count = 5 }: RatingProps) => {
  return (
    <XStack gap="$1">
      {[...Array(count).keys()].map((item) => (
        <StarIcon
          key={item}
          width={size}
          height={size}
          isActive={item < value}
          isHalfGrad={item > value - 1}
        />
      ))}
    </XStack>
  );
};

export default memo(Rating);
