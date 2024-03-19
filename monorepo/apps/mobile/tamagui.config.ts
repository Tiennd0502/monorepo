import { createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v3';
const tamaguiConfig = createTamagui({
  ...config,
});

type AppConfig = typeof config;

declare module 'tamagui' {
  type TamaguiCustomConfig = AppConfig;
}

export default tamaguiConfig;
