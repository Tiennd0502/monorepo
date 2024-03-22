import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const HomeIcon = ({
  width = 24,
  height = 24,
  color = '#textDefault',
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
      d="M22 12.667a.666.666 0 01-.473-.194L12 2.94l-9.527 9.533a.666.666 0 01-.94-.94l10-10a.667.667 0 01.94 0l10 10A.666.666 0 0122 12.667z"
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
    />
    <Path
      d="M10 15.25h-.75v6.667H5.333a.583.583 0 01-.583-.584V13.53l7.252-7.276 7.248 7.23v7.85a.583.583 0 01-.583.583H14.75V15.25H10z"
      stroke={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      strokeWidth={1.5}
    />
  </Svg>
);
