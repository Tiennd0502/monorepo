import Svg, { Path, SvgProps, Mask } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const AddIcon = ({
  width = 24,
  height = 25,
  color = '$primary',
  ...props
}: SvgProps) => (
  <Svg
    testID='add-icon'
    fill="none"
    viewBox="0 0 24 25"
    width={getTokenValueByKey(TOKEN_KEYS.SPACE, width.toString())}
    height={getTokenValueByKey(TOKEN_KEYS.SPACE, height.toString())}
    {...props}
  >
    <Path
      d="M19 11.5h-6v-6a1 1 0 10-2 0v6H5a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2z"
      fill={getTokenValueByKey(TOKEN_KEYS.COLOR, color.toString())}
    />
    <Mask maskUnits="userSpaceOnUse" x={4} y={4} width={16} height={17}>
      <Path
        d="M19 11.5h-6v-6a1 1 0 10-2 0v6H5a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2z"
        fill="#fff"
      />
    </Mask>
  </Svg>
);
