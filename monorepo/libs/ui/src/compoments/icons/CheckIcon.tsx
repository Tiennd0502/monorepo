import Svg, { Path } from 'react-native-svg';

import { IconProps } from '@monorepo/types';

export const CheckIcon = ({
  width = 15,
  height = 12,
  color = '#fff',
}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 12" fill="none">
      <Path
        d="M4.767 9.468L1.21 5.736 0 6.998 4.767 12 15 1.262 13.798 0 4.767 9.468z"
        fill={color}
      />
    </Svg>
  );
};
