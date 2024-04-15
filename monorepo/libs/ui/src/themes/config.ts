import { createTamagui, createTokens } from 'tamagui';
import { config } from '@tamagui/config/v3';
import { themes } from '@tamagui/themes';

import { radius, size, space, zIndex } from './metrics';
import { defaultFont, headingFont } from './fonts';
import { colorsMapping } from './colors';

const tokens = {
  radius,
  size,
  space,
  zIndex,
};

export const tamaguiConfig = createTamagui({
  ...config,
  defaultFont: 'body',
  themes,
  fonts: {
    body: defaultFont,
    heading: headingFont,
  },
  tokens: createTokens({
    ...tokens,
    color: colorsMapping,
  }),
});

type AppConfig = typeof config;

declare module 'tamagui' {
  type TamaguiCustomConfig = AppConfig;
}
