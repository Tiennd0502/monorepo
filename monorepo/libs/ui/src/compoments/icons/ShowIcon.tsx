import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const ShowIcon = ({
  width = 20,
  height = 20,
  color = '$primary',
  ...props
}: SvgProps) => (
  <Svg
    testID="show-icon"
    fill="none"
    viewBox="0 0 20 20"
    width={getTokenValueByKey(TOKEN_KEYS.SPACE, width.toString())}
    height={getTokenValueByKey(TOKEN_KEYS.SPACE, height.toString())}
    {...props}
  >
    <Path
      d="M2 9.5S4.91 4 10 4s8 5.5 8 5.5-2.91 5.5-8 5.5-8-5.5-8-5.5z"
      stroke={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 12c1.105 0 2-1.12 2-2.5S11.105 7 10 7 8 8.12 8 9.5s.895 2.5 2 2.5z"
      stroke={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
