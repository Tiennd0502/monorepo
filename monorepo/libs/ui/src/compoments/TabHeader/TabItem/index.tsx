import { memo } from 'react';
import { Stack } from 'tamagui';

import Divider from '../../Divider';
import Text from '../../Text';

interface TabItemProps {
  onChange: () => void;
  label: string;
  isActive: boolean;
}

const TabItem = ({ label, isActive = false, onChange }: TabItemProps) => (
  <Stack alignItems="center" gap="$2.5" onPress={onChange}>
    <Text color={isActive ? '$primary' : '$textDefault'} size="large">
      {label}
    </Text>
    {isActive && <Divider width="$10" height="$1" color="$primary" />}
  </Stack>
);

export default memo(TabItem);
