import { memo } from 'react';

// Types
import { Category } from '@monorepo/types';

// Components
import { Image, Stack } from 'tamagui';
import Text from '../Text';
import IconButton from '../IconButton';

interface CategoryItemProps {
  isActive?: boolean;
  item: Category;
  onPress?: () => void;
}

const CategoryItem = ({
  item: { label, image },
  isActive = false,
  onPress,
}: CategoryItemProps) => (
  <Stack alignContent="center" alignItems="center" gap="$2" onPress={onPress}>
    <IconButton
      onPress={onPress}
      padding="$2"
      borderRadius="$3"
      backgroundColor={isActive ? '$primary' : '$backgroundDisabled'}
    >
      <Image
        source={{ uri: image }}
        width={20}
        height={20}
        alt={label}
        tintColor="$secondary"
      />
    </IconButton>
    <Text color={isActive ? '$primary' : '$textDefault'}>{label}</Text>
  </Stack>
);

export default memo(CategoryItem);
