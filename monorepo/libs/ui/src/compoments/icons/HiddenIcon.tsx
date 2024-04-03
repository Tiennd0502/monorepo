import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const HiddenIcon = ({
  width = 20,
  height = 20,
  color = '$primary',
  ...props
}: SvgProps) => (
  <Svg
    testID="add-icon"
    fill="none"
    viewBox="0 0 20 20"
    width={getTokenValueByKey(TOKEN_KEYS.SPACE, width.toString())}
    height={getTokenValueByKey(TOKEN_KEYS.SPACE, height.toString())}
    {...props}
  >
    <Path
      d="M2.996 17.64a.657.657 0 01-.465-.195.655.655 0 010-.93L16.516 2.532a.655.655 0 01.93 0 .655.655 0 010 .93L3.46 17.445a.657.657 0 01-.465.196zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      fillOpacity={1}
    />
    <Path
      d="M5.664 14.973a.64.64 0 01-.324-.086c-1.695-.953-3.402-2.461-5.078-4.477a.66.66 0 010-.844C4.988 3.883 9.824 2.375 14.637 5.09c.18.101.3.281.332.484a.663.663 0 01-.188.555L6.13 14.78a.663.663 0 01-.465.192zM1.633 9.988c1.308 1.516 2.629 2.688 3.926 3.5l7.648-7.648C9.359 4.082 5.559 5.445 1.633 9.988zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      fillOpacity={1}
    />
    <Path
      d="M7.66 12.977a.653.653 0 01-.465-.196 3.951 3.951 0 015.562-5.61c.126.122.196.29.2.466 0 .176-.07.343-.191.468l-4.637 4.676a.662.662 0 01-.469.196zm2.328-5.622a2.634 2.634 0 00-2.27 3.97l3.587-3.618a2.604 2.604 0 00-1.317-.352zm0 0M9.984 16.191c-.78 0-1.562-.109-2.34-.328a.662.662 0 01-.457-.812.662.662 0 01.813-.457c3.39.957 6.867-.59 10.344-4.606-.871-1.008-1.75-1.867-2.617-2.562a.662.662 0 01-.102-.926.655.655 0 01.926-.102c1.054.844 2.117 1.91 3.164 3.168a.66.66 0 010 .844c-3.195 3.848-6.461 5.781-9.73 5.781zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      fillOpacity={1}
    />
    <Path
      d="M9.988 13.941a5.18 5.18 0 01-.25-.007.66.66 0 01.078-1.317c.059.004.114.008.172.008a2.64 2.64 0 002.637-2.637c0-.058-.004-.117-.008-.175a.657.657 0 01.613-.7c.368-.023.68.25.704.614a3.958 3.958 0 01-3.945 4.215zm0 0"
      stroke="none"
      fillRule="nonzero"
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
      fillOpacity={1}
    />
  </Svg>
);
