import Svg, { SvgProps, Rect } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const MinusIcon = ({
  width = 24,
  height = 24,
  disabled = false,
  color = '$primary',
  ...props
}: SvgProps) => (
  <Svg
    testID='minus-icon'
    fill="none"
    viewBox="0 0 24 24"
    width={getTokenValueByKey(TOKEN_KEYS.SPACE, width.toString())}
    height={getTokenValueByKey(TOKEN_KEYS.SPACE, height.toString())}
    {...props}
  >
    <Rect
      x={4}
      y={11}
      width={16}
      height={1.6}
      rx={1}
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
    />
  </Svg>
);
