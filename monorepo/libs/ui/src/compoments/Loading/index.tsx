import { memo } from 'react';
import { Spinner, Stack, ColorTokens, StackProps } from 'tamagui';

interface LoadingProps extends StackProps {
  size?: 'small' | 'large';
  color?: ColorTokens;
}

const Loading = ({
  size = 'large',
  color = '$primary',
  ...props
}: LoadingProps) => (
  <Stack
    alignSelf="center"
    zIndex="$5"
    height="$full"
    width="$full"
    justifyContent="center"
    position="absolute"
    {...props}
  >
    <Spinner size={size} color={color} />
  </Stack>
);

export default memo(Loading);
