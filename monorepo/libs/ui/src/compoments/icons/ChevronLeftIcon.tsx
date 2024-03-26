import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const ChevronLeftIcon = ({
  width = 20,
  height = 20,
  color = '$primary',
  ...props
}: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 20 20"
    width={getTokenValueByKey(TOKEN_KEYS.SPACE, width.toString())}
    height={getTokenValueByKey(TOKEN_KEYS.SPACE, height.toString())}
    {...props}
  >
    <Path
      d="M13.25 4l-6.5 6.5 6.5 6.5"
      stroke={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
