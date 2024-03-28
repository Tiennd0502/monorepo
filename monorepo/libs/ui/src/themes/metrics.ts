export const border = {
  small: '1px',
  extraSmall: '1.5px',
  medium: '2px',
};

export const borderRadius = {
  small: '4px',
  medium: '6px',
  extraMedium: '8px',
  large: '10px',
  extraLarge: '12px',
  huge: '40px',
  circle: '50%',
};

export const spacingTamagui = {
  px: 1,
  '0': 0,
  '0.5': 2,
  '1': 4,
  '1.5': 6,
  '1.75': 7,
  '2': 8,
  '2.5': 10,
  '3': 12,
  '3.5': 14,
  '3.75': 15,
  '4': 16,
  '4.5': 18,
  '5': 20,
  '6': 24,
  '6.5': 26,
  '7.5': 30,
  '8': 32,
  '8.5': 34,
  '8.75': 35,
  '9': 36,
  '10': 40,
  '10.75': 43,
  '11': 44,
  '11.5': 46,
  '12': 48,
  '12.5': 50,
  '13.5': 54,
  '15': 60,
  '16.25': 65,
  '16.5': 66,
  '17.5': 70,
  '20': 80,
  '25': 100,
  '34': 136,
  '45': 180,
  '48': 192,
  '52.5': 210,
};

export const sizeMapping = {
  dialogWidthsSmall: 366,
  dialogWidthsMedium: 466,
  dialogWidthsLarge: 558,
  dialogWidthsExtraLarge: 630,
  btnHeightMedium: 48,
};

export const size = {
  ...spacingTamagui,
  ...sizeMapping,
  '1/2': '50%',
  full: '100%',
  true: 50,
} as const;

export const space = {
  ...spacingTamagui,
  ...sizeMapping,
  true: 4,
};

export const radius = {
  ...space,
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  true: 5,
  '2xl': 16,
  '3xl': 24,
  '4xl': 26,
  full: 9999,
  circle: '50%',
} as const;

export const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
} as const;
