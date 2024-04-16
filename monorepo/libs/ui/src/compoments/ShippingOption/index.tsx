import { memo } from 'react';
import { Stack } from 'tamagui';
import isEqual from 'react-fast-compare';

// Types
import { Shipping } from '@monorepo/types';

// Components
import Checkbox from '../Checkbox';
import ShippingCard from '../ShippingCard';

interface ShippingOptionProps {
  label: string;
  item: Shipping;
  isActive?: boolean;
  onCheckedChange: (checked: boolean) => void;
  onEditItem: (value: string) => void;
}

const ShippingOption = ({
  label,
  item,
  isActive = false,
  onCheckedChange,
  onEditItem,
}: ShippingOptionProps) => {
  return (
    <Stack paddingBottom="$3.75">
      <Checkbox
        label={label}
        checked={isActive}
        onCheckedChange={onCheckedChange}
      />
      <ShippingCard item={item} onEdit={onEditItem} />
    </Stack>
  );
};

export default memo(ShippingOption);
