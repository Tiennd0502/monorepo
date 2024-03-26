import { memo } from 'react';

// Types
import { Product } from '@monorepo/types';

// Constants
import { DEFAULT_PRODUCT_IMAGE } from '@monorepo/constants';

// Components
import { Stack, Image } from 'tamagui';
import Text from '../Text';

interface ProductCardProps {
  item: Product;
  onPress: () => void;
}

const ProductCard = ({
  item: { price, name, image },
  onPress,
}: ProductCardProps) => {
  const { formatted = '' } = price || {};

  return (
    <Stack testID="product" onPress={onPress} gap="$2.5" flex={1}>
      <Image
        source={{ uri: image || DEFAULT_PRODUCT_IMAGE }}
        height="$52.5"
        borderRadius="$2.5"
        width="100%"
      />
      <Stack paddingRight={10}>
        <Text color="$textQuaternary" numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <Text color="$textBold" fontWeight="bold">
          {formatted}
        </Text>
      </Stack>
    </Stack>
  );
};

export default memo(ProductCard);
