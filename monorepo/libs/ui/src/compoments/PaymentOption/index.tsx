import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Stack } from 'tamagui';

import { Card } from '@monorepo/types';

import PaymentCard from '../PaymentCard';
import Checkbox from '../Checkbox';

interface PaymentOptionProps {
  item: Card;
  label: string;
  isActive?: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const PaymentOption = ({
  label,
  item,
  isActive = false,
  onCheckedChange,
}: PaymentOptionProps) => {
  return (
    <Stack paddingBottom="$3">
      <PaymentCard item={item} isDisabled={!isActive} />
      <Checkbox
        label={label}
        checked={isActive}
        onCheckedChange={onCheckedChange}
      />
    </Stack>
  );
};

export default memo(PaymentOption, isEqual);
