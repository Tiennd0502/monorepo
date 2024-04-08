import { createFont } from 'tamagui';
import { spacingTamagui } from './metrics';

export const fonts = {
  body: 'NunitoSans, Helvetica, Arial, sans-serif',
  heading: 'Gelasio, Helvetica, Arial, sans-serif',
  title: 'Merriweather, Helvetica, Arial, sans-serif',
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
  weight: {
    1: '100',
    3: '300',
    4: '400',
    6: '600',
    7: '700',
    true: '400',
  },
  letterSpacing: {
    1: 0,
    2: -0.5,
    true: 0,
  },
  face: {
    100: {
      normal: 'NunitoSans_7pt-Regular',
      italic: 'NunitoSans_7pt-Regular_Italic',
    },
    300: {
      normal: 'NunitoSans_7pt-Light',
      italic: 'NunitoSans_7pt-Light_Italic',
    },
    400: {
      normal: 'NunitoSans_7pt-Medium',
      italic: 'NunitoSans_7pt-Medium_Italic',
    },
    600: {
      normal: 'NunitoSans_7pt-SemiBold',
      italic: 'NunitoSans_7pt-SemiBold_Italic',
    },
    700: {
      normal: 'NunitoSans_7pt-Bold',
      italic: 'NunitoSans_7pt-Bold_Italic',
    },
    900: {
      normal: 'NunitoSans_7pt-ExtraBold',
      italic: 'NunitoSans_7pt-ExtraBold_Italic',
    },
  },
});

export const headingFont = createFont({
  family: fonts.heading,
  ...fontConfig,
  weight: {
    4: '400',
    6: '600',
    7: '700',
    true: '700',
  },
  face: {
    400: { normal: 'Gelasio-Regular', italic: 'Gelasio-Regular_Italic' },
    600: { normal: 'Gelasio-SemiBold', italic: 'Gelasio-SemiBold_Italic' },
    700: { normal: 'Gelasio-Bold', italic: 'Gelasio-Bold_Italic' },
  },
});

export const titleFont = createFont({
  family: fonts.title,
  ...fontConfig,
  weight: {
    7: '700',
    true: '700',
  },
  face: {
    700: { normal: 'Merriweather-Bold', italic: 'Merriweather-Bold_itali' },
  },
});
