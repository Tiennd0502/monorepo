import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const LogOutIcon = ({
  width = '$6',
  height = '$6',
  color = '$primary',
  ...props
}: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    width={getTokenValueByKey(TOKEN_KEYS.SPACE, width.toString())}
    height={getTokenValueByKey(TOKEN_KEYS.SPACE, height.toString())}
    {...props}
  >
    <Path
      d="M15.016 7.39v-.934a3.685 3.685 0 00-3.685-3.685H6.456a3.685 3.685 0 00-3.684 3.685v11.13a3.685 3.685 0 003.684 3.686h4.885a3.675 3.675 0 003.675-3.674v-.944M21.81 12.021H9.769M18.881 9.106l2.928 2.915-2.928 2.916"
      stroke={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
