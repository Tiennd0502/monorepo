import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const SearchIcon = ({
  width = 24,
  height = 24,
  color = '$primary',
  ...props
}: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    height={getTokenValueByKey(TOKEN_KEYS.SPACE, height.toString())}
    width={getTokenValueByKey(TOKEN_KEYS.SPACE, width.toString())}
    {...props}
  >
    <Path
      d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
    />
  </Svg>
);
