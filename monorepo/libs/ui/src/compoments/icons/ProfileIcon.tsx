import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const ProfileIcon = ({
  width = 24,
  height = 24,
  color = '$textDefault',
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 21s1.5 0 1.5-1.5-1.5-6-9-6-9 4.5-9 6S4.5 21 4.5 21h15zM4.508 19.584v-.003.003zm.025-.084h14.934a.379.379 0 00.021-.003l.012-.003c-.002-.369-.231-1.479-1.248-2.496C17.274 16.02 15.434 15 12 15c-3.435 0-5.274 1.02-6.252 1.998-1.017 1.017-1.245 2.127-1.248 2.496l.033.006zm14.961.084v-.003.003zM12 10.5a3 3 0 100-6 3 3 0 000 6zm4.5-3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
    />
  </Svg>
);
