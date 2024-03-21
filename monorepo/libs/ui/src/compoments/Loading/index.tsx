import { memo } from 'react';
import { Spinner, Stack, ColorTokens } from 'tamagui';

interface LoadingProps {
  size?: 'small' | 'large';
  color?: ColorTokens;
}

const Loading = ({ size = 'large', color = '$primary' }: LoadingProps) => (
  <Stack
    alignSelf="center"
    zIndex="$5"
    height="$full"
    width="$full"
    justifyContent="center"
    position="absolute"
  >
    <Spinner size={size} color={color} />
  </Stack>
);

export default memo(Loading);
