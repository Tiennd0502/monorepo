import { memo } from 'react';
import { Stack } from 'tamagui';

export interface DividerProps {
  width?: string;
  height?: string;
  color?: string;
}

const Divider = ({
  width = '100%',
  height = '$px',
  color = '$backgroundDisabled',
}: DividerProps) => (
  <Stack width={width} height={height} backgroundColor={color} />
);

export default memo(Divider);
