import { memo, useCallback } from 'react';
import { Stack, Image, XStack } from 'tamagui';

// Constants
import { DEFAULT_PRODUCT_IMAGE } from '@monorepo/constants';

// Types
import { Product } from '@monorepo/types';

// Components
import Text from '../Text';
import Quantity from '../Quantity';
import { BagIcon, CloseIcon } from '../icons';

interface CartItemProps {
  item: Product;
  isFavorites?: boolean;
  quantity?: number;
  onDelete: (value: string) => void;
  onChangeQuantity?: (value: number) => void;
}

const CartItem = ({
  item,
  isFavorites = false,
  quantity,
  onDelete,
  onChangeQuantity,
}: CartItemProps) => {
  const {
    id,
    name,
    price: { formatted },
    image,
  } = item;
  const handleDelete = useCallback(() => onDelete(id), [id, onDelete]);

  return (
    <XStack flex={1} gap="$2.5" paddingVertical="$3">
      <Image
        width="$25"
        height="$25"
        resizeMode="cover"
        borderRadius="$2.5"
        source={{ uri: image || DEFAULT_PRODUCT_IMAGE }}
      />
      <Stack justifyContent="space-between">
        <Stack gap="$1">
          <Text color="$textQuaternary" numberOfLines={2} ellipsizeMode="tail">
            {name}
          </Text>
          <Text size="extraMedium" color="$primary" fontWeight="bold">
            {formatted}
          </Text>
        </Stack>
        {quantity && onChangeQuantity && (
          <Quantity defaultValue={quantity} onChangeValue={onChangeQuantity} />
        )}
      </Stack>
      <Stack marginLeft="auto" marginRight={0} justifyContent="space-between">
        <CloseIcon onPress={handleDelete} />
        {isFavorites && <BagIcon />}
      </Stack>
    </XStack>
  );
};

export default memo(CartItem);
