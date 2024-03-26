const colors = {
  primary: '#242424',
  secondary: '#fff',
} as const;

const backgroundColors = {
  backgroundPrimary: colors.primary,
  backgroundSecondary: colors.secondary,
  backgroundDisabled: '#909090',
  backgroundInputDisabled: '#f5f5f5',
  backgroundIcon: '#e0e0e0',
  backgroundIconDisabled: '#999',
  backgroundWarning: '#f2c94c',
} as const;

const textColors = {
  textPrimary: colors.primary,
  textSecondary: colors.secondary,
  textDefault: '#999',
  textTertiary: '#909090',
  textQuaternary: '#606060',
  textBold: '#303030',
  textLink: colors.primary,
  textLabel: '#808080',
  textPlaceholder: '#b3b3b3',
} as const;

const buttonColors = {
  buttonPrimary: colors.primary,
  buttonGhost: 'transparent',
  buttonDisable: '#909090',
};

const statusColors = {
  successPrimary: '#27ae60',
  errorPrimary: '#eb5757',
  warningPrimary: '#f2c94c',
} as const;

const borderColor = {
  borderPrimary: colors.primary,
  borderSecondary: '#bdbdbd',
  boderTertiary: '#8a959e33',
} as const;

const boxShadowColors = {
  boxShadowPrimary: colors.primary,
  boxShadowSecondary: 'rgba(52, 52, 52, 0.8)',
  boxShadowTertiary: '#999',
} as const;

const iconColors = {
  iconNormal: colors.primary,
  iconActived: '#333',
  iconDisabled: '#909090',
} as const;

export const colorsMapping = {
  ...colors,
  ...textColors,
  ...backgroundColors,
  ...statusColors,
  ...boxShadowColors,
  ...borderColor,
  ...iconColors,
  ...buttonColors,
};
