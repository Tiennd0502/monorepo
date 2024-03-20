import { Heading as THeading, styled } from 'tamagui';

const Heading = styled(THeading, {
  color: '$textBold',
  fontFamily: '$body',
  fontWeight: 'bold',
  allowFontScaling: false,

  variants: {
    title: {
      true: {
        fontFamily: '$title',
      },
    },

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
    title: true,
    size: 'medium',
  },
});

export default Heading;
