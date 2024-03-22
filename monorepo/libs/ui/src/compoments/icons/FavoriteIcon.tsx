import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const FavoriteIcon = ({
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
      d="M4.997 21.25h0c-.079 0-.131-.034-.156-.069a.517.517 0 01-.091-.317V3.698c0-.431.465-.948 1.132-.948h12.303c.63 0 1.065.483 1.065.948v17.166c0 .24-.069.324-.087.344-.022.022-.057.042-.116.042-.064 0-.186-.025-.381-.182h0l-5.486-4.406a1.826 1.826 0 00-1.139-.382c-.394 0-.812.12-1.137.38l-.001.001L5.4 21.068l-.002.001c-.181.146-.325.18-.4.18z"
      stroke={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      strokeWidth={1.5}
    />
  </Svg>
);
