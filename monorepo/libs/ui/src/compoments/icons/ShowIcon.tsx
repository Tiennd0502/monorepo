import Svg, { Path } from 'react-native-svg';

import { IconProps } from '@monorepo/types';

export const ShowIcon = ({
  width = 20,
  height = 20,
  color = '#242424',
  onPress,
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    testID="show-icon"
    onPress={onPress}
  >
    <Path
      d="M2 9.5S4.91 4 10 4s8 5.5 8 5.5-2.91 5.5-8 5.5-8-5.5-8-5.5z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 12c1.105 0 2-1.12 2-2.5S11.105 7 10 7 8 8.12 8 9.5s.895 2.5 2 2.5z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
