import { createFont } from 'tamagui';
import { spacingTamagui } from './metrics';

export const fonts = {
  body: 'Tahoma, Helvetica, Arial, sans-serif',
  heading: 'Tahoma, Helvetica, Arial, sans-serif',
  title: 'Inter, Helvetica, Arial, sans-serif',
};

export const fontSizeMapping = {
  textTiny: 8,
  textExtraSmall: 12,
  textSmall: 14,
  textMedium: 16,
  textLarge: 18,
  textExtraLarge: 20,
} as const;

export const lineHeight = {
  extraTiny: 20,
  tiny: 22,
  small: 24,
  medium: 28,
  large: 32,
  extraLarge: 40,
  huge: 48,
  extraHuge: 56,
} as const;

export const fontConfig = {
  size: {
    ...spacingTamagui,
    ...fontSizeMapping,
    true: 16,
  },
  lineHeight,
};

export const defaultFont = createFont({
  family: fonts.body,
  ...fontConfig,
});

export const headingFont = createFont({
  family: fonts.heading,
  ...fontConfig,
});

export const titleFont = createFont({
  family: fonts.title,
  ...fontConfig,
});
