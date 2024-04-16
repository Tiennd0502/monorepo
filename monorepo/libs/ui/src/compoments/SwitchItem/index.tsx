import { memo } from 'react';
import { XStack } from 'tamagui';
import { shadows } from '../../themes';

import Text from '../Text';
import Switch from '../Switch';

interface SwitchItemProps {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const SwitchItem = ({
  label,
  disabled = false,
  checked = false,
  onCheckedChange,
}: SwitchItemProps) => {
  return (
    <XStack
      height="$13.5"
      paddingHorizontal="$4"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="$backgroundSecondary"
      borderRadius="$1"
      style={shadows.card}
    >
      <Text color="$textPrimary" size="extraMedium">
        {label}
      </Text>
      <Switch
        disabled={disabled}
        defaultChecked={checked}
        onCheckedChange={onCheckedChange}
      />
    </XStack>
  );
};

export default memo(SwitchItem);
