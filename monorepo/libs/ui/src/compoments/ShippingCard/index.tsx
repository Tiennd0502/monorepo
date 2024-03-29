import { memo, useCallback } from 'react';
import { Stack, XStack } from 'tamagui';

// Types
import { Shipping } from '@monorepo/types';

// Components
import Text from '../Text';
import Divider from '../Divider';
import { EditIcon } from '../icons';
import { shadows } from '../../themes';

interface ShippingCardProps {
  item: Shipping;
  onEdit?: (value: string) => void;
}

const ShippingCard = ({
  item: { id, name, address },
  onEdit,
}: ShippingCardProps) => {
  const handleEditClick = useCallback(() => {
    onEdit && onEdit(id);
  }, [id, onEdit]);

  return (
    <Stack
      style={shadows.card}
      borderRadius="$2"
      backgroundColor="$backgroundSecondary"
    >
      <XStack
        justifyContent="space-between"
        paddingVertical={'$3.75'}
        paddingLeft="$5"
        paddingRight={'$3.75'}
      >
        <Text color="$textPrimary" size="large" bold>
          {name}
        </Text>
        {onEdit && <EditIcon onPress={handleEditClick} />}
      </XStack>
      <Divider height={onEdit ? '$px' : '$0.5'} color="$backgroundTertiary" />
      <Text
        paddingHorizontal="$5"
        paddingTop="$3"
        paddingBottom="$4.5"
        color="$textLabel"
      >
        {address}
      </Text>
    </Stack>
  );
};

export default memo(ShippingCard);
