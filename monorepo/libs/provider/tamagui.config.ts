import { createTamagui, createTokens } from 'tamagui';
import { config } from '@tamagui/config/v3';
import { themes } from '@tamagui/themes';

import {
  colorsMapping,
  radius,
  size,
  space,
  zIndex,
  defaultFont,
  headingFont,
} from '@monorepo/ui';

const tokens = {
  radius,
  size,
  space,
  zIndex,
};

const tamaguiConfig = createTamagui({
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

export default tamaguiConfig;
