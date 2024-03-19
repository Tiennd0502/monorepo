const colors = {
  primary: '#242424',
  secondary: '#fff',
} as const;

const backgroundColors = {
  backgroundPrimary: colors.primary,
  backgroundSecondary: colors.secondary,
  backgroundInputDisabled: '#909090',
  backgroundIcon: '#fff',
  backgroundIconDisabled: '#e6e6e6',
} as const;

const textColors = {
  textPrimary: colors.primary,
  textSecondary: colors.secondary,
  textDefault: '#999',
  textTertiary: '#909090',
  textBold: '#000000',
  textLink: colors.primary,
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
  borderPrimary: '#dbdbdb',
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
