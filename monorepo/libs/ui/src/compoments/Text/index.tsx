import { Text as TextBase, styled } from 'tamagui';

const Text = styled(TextBase, {
  color: '$textDefault',
  fontWeight: 'normal',
  fontFamily: '$body',
  allowFontScaling: false,

  defaultVariants: {
    size: 'medium',
  },

  variants: {
    error: {
      true: {
        color: '$errorPrimary',
      },
    },
    bold: {
      true: {
        fontWeight: 'bold',
        fontFamily: '$title',
      },
    },
    boldReversal: {
      true: {
        fontFamily: '$heading',
        color: '$textReversal',
        fontWeight: 'bold',
      },
    },

    size: {
      small: {
        fontSize: '$2.5',
        lineHeight: 12,
      },

      medium: {
        fontSize: '$3.5',
        lineHeight: 20,
      },

      extraMedium: {
        fontSize: '$4',
        lineHeight: 20,
      },

      large: {
        fontSize: '$4.5',
        lineHeight: 20,
      },

      extraLarge: {
        fontSize: '$6',
        lineHeight: 30,
      },

      huge: {
        fontSize: '$7.5',
        lineHeight: 41,
        fontWeight: 'bold',
      },
    },
  } as const,
});

export default Text;
