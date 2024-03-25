import { memo } from 'react';
import { Stack, StackProps } from 'tamagui';

export interface DividerProps extends StackProps {
  width?: string;
  height?: string;
  color?: string;
}

const Divider = ({
  width = '100%',
  height = '$px',
  color = '$backgroundDisabled',
  ...props
}: DividerProps) => (
  <Stack width={width} height={height} backgroundColor={color} {...props} />
);

export default memo(Divider);
