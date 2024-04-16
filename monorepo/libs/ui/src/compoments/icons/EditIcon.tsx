import Svg, { Path, SvgProps } from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

export const EditIcon = ({
  width = '$6',
  height = '$6',
  color = '$textPrimary',
  disabled = false,
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
      d="M4.293 17.686a1.003 1.003 0 01-.29-.799l.38-4.17c.042-.457.244-.888.57-1.213l8.995-8.996c.702-.705 1.976-.67 2.716.069l2.738 2.738h.002c.765.767.796 1.985.067 2.715l-8.996 8.996a1.975 1.975 0 01-1.214.57l-4.17.378a1.003 1.003 0 01-.798-.289zm11.726-9.03l-2.695-2.694 1.947-1.95 2.694 2.695-1.947 1.95zm-6.94 6.946l-2.976.271.264-2.955L11.983 7.3l2.697 2.697-5.6 5.604zM19 21.977c.55 0 1-.45 1-1 0-.549-.45-1-1-1H5c-.548 0-1 .451-1 1 0 .55.452 1 1 1h14z"
      fill={getTokenValueByKey(
        TOKEN_KEYS.COLOR,
        disabled ? '$textTertiary' : color.toString()
      )}
    />
  </Svg>
);
