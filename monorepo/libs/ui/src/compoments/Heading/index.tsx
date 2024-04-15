import { Heading as THeading, styled } from 'tamagui';

const Heading = styled(THeading, {
  color: '$textBold',
  fontFamily: '$body',
  fontWeight: '$7',
  allowFontScaling: false,

  variants: {
    header: {
      true: {
        fontFamily: '$heading',
      },
    },

    size: {
      small: {
        fontSize: '$4',
        lineHeight: '$small',
      },

      medium: {
        fontSize: '$4.5',
        lineHeight: '$medium',
      },

      large: {
        fontSize: '$6',
        lineHeight: '$medium',
      },

      extraLarge: {
        fontSize: '$7.5',
        lineHeight: '$extraLarge',
      },

      huge: {
        fontSize: '$9',
        lineHeight: '$huge',
      },
    },
  } as const,

  defaultVariants: {
    header: true,
    size: 'medium',
  },
});

export default Heading;
