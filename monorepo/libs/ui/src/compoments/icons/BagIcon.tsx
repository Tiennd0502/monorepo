import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const BagIcon = ({
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
      d="M17.969 16.31L16.667 4.06c0-.77-.597-1.393-1.334-1.393H4.667c-.737 0-1.334.623-1.334 1.394L2.031 16.31c-.019.095-.031.193-.031.295C2 17.376 2.597 18 3.333 18h13.334c.736 0 1.333-.624 1.333-1.394 0-.102-.012-.2-.031-.295zM13.333 6.088v.762c0 1.921-1.495 3.484-3.333 3.484S6.667 8.77 6.667 6.85v-.762A1.04 1.04 0 016 5.107c0-.578.448-1.046 1-1.046s1 .468 1 1.045V6.85c0 1.152.897 2.09 2 2.09s2-.938 2-2.09V5.106c0-.577.448-1.045 1-1.045s1 .468 1 1.045c0 .455-.28.838-.667.981z"
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
    />
  </Svg>
);
