import { styled, Button as ButtonBase } from 'tamagui';

const IconButton = styled(ButtonBase, {
  backgroundColor: 'transparent',
  borderWidth: 0,
  padding: 0,
  height: 'fit-content',

  hoverStyle: {
    backgroundColor: '$backgroundIcon',
    opacity: 0.8,
  },

  focusStyle: {
    borderWidth: 0,
    outlineStyle: 'none',
  },

  pressStyle: {
    backgroundColor: '$backgroundIcon',
  },

  variants: {
    chromeless: {
      true: {
        pressStyle: {
          backgroundColor: 'transparent',
        },
      },
    },

    solid: {
      true: {
        hoverStyle: {
          backgroundColor: '$backgroundDisabled',
        },
      },
    },
  },

  defaultVariants: {
    chromeless: true,
  },
});

export default IconButton;
