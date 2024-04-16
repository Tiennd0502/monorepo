import { Dimensions } from 'react-native';

import { TOKEN_KEYS } from '@monorepo/types';
import { BASE_SCREEN_WIDTH, BASE_SCREEN_HEIGHT } from '../constants';
import { getTokenValueByKey } from '@monorepo/utils';

const { width, height } = Dimensions.get('window');

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// horizontal scale
export const hs = (size: number | string): number => {
  const newSize =
    typeof size === 'string'
      ? getTokenValueByKey(TOKEN_KEYS.SPACE, size)
      : size;
  return (shortDimension / BASE_SCREEN_WIDTH) * newSize;
};

// vertical scale
export const vs = (size: number | string): number => {
  const newSize =
    typeof size === 'string'
      ? getTokenValueByKey(TOKEN_KEYS.SPACE, size)
      : size;
  return (longDimension / BASE_SCREEN_HEIGHT) * newSize;
};
