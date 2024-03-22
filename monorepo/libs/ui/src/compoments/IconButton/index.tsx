import { styled, Button as ButtonBase } from 'tamagui';

const IconButton = styled(ButtonBase, {
  backgroundColor: 'transparent',
  borderWidth: 0,
  padding: 0,
  height: 'fit-content',

  hoverStyle: {
    backgroundColor: 'transparent',
    opacity: 0.7,
  },

  focusStyle: {
    borderWidth: 0,
    outlineStyle: 'none',
  },

  pressStyle: {
    backgroundColor: 'transparent',
  },

  variants: {
    chromeless: {
      true: {
        pressStyle: {
          backgroundColor: 'transparent',
        },
      },
    },
  },

  defaultVariants: {
    chromeless: true,
  },
});

export default IconButton;
