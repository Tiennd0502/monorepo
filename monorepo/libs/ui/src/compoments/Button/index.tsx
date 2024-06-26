import { memo } from 'react';
import {
  Button as TButton,
  styled,
  Spinner,
  ButtonProps as TButtonProps,
} from 'tamagui';

const ButtonFrame = styled(TButton, {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: '$lg',
  borderWidth: 0,
  focusStyle: {
    opacity: 0.7,
  },

  variants: {
    solid: {
      true: {
        backgroundColor: '$primary',
        color: '$secondary',
      },
    },

    reversal: {
      true: {
        backgroundColor: '$tertiary',
        borderColor: '$tertiary',
      },
    },

    outlined: {
      true: {
        backgroundColor: '$secondary',
        borderColor: '$primary',
        borderWidth: 1,
      },
    },

    disabled: {
      true: {
        backgroundColor: '$backgroundDisabled',
        pointerEvents: 'none',
      },
    },

    chromeless: {
      true: {
        backgroundColor: 'transparent',
        color: '$primary',
      },
    },

    size: {
      sm: {
        paddingVertical: '$1.75',
        height: '$9',
        borderRadius: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
      },

      md: {
        paddingVertical: '$3',
        height: '$12.5',
      },

      lg: {
        paddingVertical: '$3',
        height: '$13,5',
      },

      xl: {
        paddingVertical: '$4',
        height: '$15',
      },
    },
  } as const,

  defaultVariants: {
    solid: true,
    size: 'md',
  },
});

const ButtonText = styled(TButton.Text, {
  allowFontScaling: false,
  fontFamily: '$heading',
  fontWeight: '600',
  color: '$secondary',

  variants: {
    solid: {
      true: {
        color: '$secondary',
      },
    },

    reversal: {
      true: {
        color: '$secondary',
      },
    },

    outlined: {
      true: {
        color: '$primary',
      },
    },

    chromeless: {
      true: {
        color: '$primary',
      },
    },

    disabled: {
      true: {
        opacity: 0.7,
        pointerEvents: 'none',
      },
    },

    size: {
      sm: {
        fontSize: '$textMedium',
        lineHeight: '$2.5',
      },

      md: {
        fontSize: '$textMedium',
        lineHeight: '$4.5',
      },

      lg: {
        fontSize: '$4.5',
        fontWeight: '$4.5',
      },

      xl: {
        fontSize: '$5',
        fontWeight: '$5',
        lineHeight: 24,
      },
    },
  } as const,
});

interface ButtonProps extends Omit<TButtonProps, 'variant'> {
  isLoading?: boolean;
  variant?: 'outlined' | 'disabled' | 'reversal' | 'solid' | 'chromeless';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = ({
  variant,
  children,
  isLoading = false,
  disabled = false,
  size = 'md',
  ...rest
}: ButtonProps) => {
  const variantObject = variant ? { [variant]: true } : {};

  return (
    <ButtonFrame
      testID="button"
      unstyled
      size={size}
      {...variantObject}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? (
        <Spinner size="small" color="$tertiary" paddingVertical="$1" />
      ) : (
        <ButtonText
          unstyled
          {...variantObject}
          size={size}
          disabled={isLoading || disabled}
        >
          {children}
        </ButtonText>
      )}
    </ButtonFrame>
  );
};

export default memo(Button);
