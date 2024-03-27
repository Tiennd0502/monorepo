import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const DeleteIcon = ({
  width = 24,
  height = 24,
  color = '#$primary',
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
      d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"
      stroke={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
