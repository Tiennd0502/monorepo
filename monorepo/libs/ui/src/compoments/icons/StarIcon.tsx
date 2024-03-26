import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';

interface StarIcon extends SvgProps {
  isHalfGrad?: boolean;
  isActive?: boolean;
}

export const StarIcon = ({
  width = 16,
  height = 16,
  color = '$backgroundWarning',
  isActive = false,
  isHalfGrad = false,
}: StarIcon) => (
  <Svg
    fill="none"
    viewBox="0 0 32 32"
    width={getTokenValueByKey(TOKEN_KEYS.SPACE, width.toString())}
    height={getTokenValueByKey(TOKEN_KEYS.SPACE, height.toString())}
  >
    <Defs>
      <LinearGradient id="a">
        <Stop
          offset="50%"
          stopColor={getTokenValueByKey(
            TOKEN_KEYS.COLOR,
            isActive ? color.toString() : '$textDefault'
          )}
        />
        <Stop
          offset="50%"
          stopColor={getTokenValueByKey(
            TOKEN_KEYS.COLOR,
            isHalfGrad ? '$textDefault' : color.toString()
          )}
        />
      </LinearGradient>
    </Defs>
    <Path
      fill="url(#a)"
      d="M20.388 10.918L32 12.118l-8.735 7.749L25.914 31.4l-9.893-6.088L6.127 31.4l2.695-11.533L0 12.118l11.547-1.2L16.026.6l4.362 10.318z"
    />
  </Svg>
);
