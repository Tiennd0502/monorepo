export const border = {
  small: '1px',
  extraSmall: '1.5px',
  medium: '2px',
};

export const borderRadius = {
  small: '4px',
  medium: '5px',
  large: '8px',
  extraLarge: '16px',
  circle: '50%',
};

export const spacingTamagui = {
  px: 1,
  '0': 0,
  '0.5': 2,
  '1': 4,
  '1.5': 6,
  '2': 8,
  '2.5': 10,
  '3': 12,
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
