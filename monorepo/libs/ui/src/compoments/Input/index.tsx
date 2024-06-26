import {
  styled,
  InputProps as TInputProps,
  Input as TInput,
  XStack,
  ButtonProps,
  TamaguiElement,
} from 'tamagui';
import { forwardRef, memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';

import Text from '../Text';
import IconButton from '../IconButton';

const StyledInput = styled(TInput, {
  flex: 1,
  borderWidth: '$px',
  borderRadius: '$small',
  color: '$textDefault',
  paddingHorizontal: '$4',
  paddingTop: '$6.5',
  paddingBottom: '$3.5',
  height: '$12.5',
  placeholderTextColor: '$textDefault',
  allowFontScaling: false,

  hoverStyle: {
    borderColor: 'none',
  },

  variants: {
    solid: {
      true: {
        backgroundColor: '$secondary',
        color: '$textPrimary',
        borderColor: 'transparent',
        focusStyle: {
          borderColor: '$borderTertiary',
        },
      },
    },

    outlined: {
      true: {
        backgroundColor: '$secondary',
        borderColor: '$borderTertiary',
        color: 'textPrimary',
      },
    },

    flushed: {
      true: {
        backgroundColor: 'transparent',
        color: 'textPrimary',
        borderColor: 'transparent',
        focusStyle: {
          borderColor: 'transparent',
          outlineColor: 'transparent',
        },
      },
    },

    disabled: {
      true: {
        backgroundColor: '$backgroundInputDisabled',
        borderColor: '$backgroundInputDisabled',
        color: 'textPlaceholder',
      },
    },

    size: {
      sm: {
        height: '$11',
        paddingVertical: '$3',
      },

      md: {
        fontSize: '$4',
        height: '$16.5',
      },
    },
  } as const,

  defaultVariants: {
    solid: true,
    size: 'md',
  },
});

const StyledLabel = styled(Text, {
  position: 'absolute',
  zIndex: '$2',
  top: '$2',
  left: '$4',
  color: '$textLabel',

  variants: {
    size: {
      md: {
        fontSize: '$3',
      },
    },
  } as const,

  defaultVariants: {
    size: 'md',
  },
});

const StyledErrorMessage = styled(Text, {
  position: 'absolute',
  zIndex: '$2',
  bottom: 0,
  left: '$4',
  marginBottom: -20,

  variants: {
    size: {
      md: {
        fontSize: '$3',
      },
    },
  } as const,
});

export type InputVariant = 'outlined' | 'solid' | 'flushed' | 'disabled';

export interface InputProps extends Omit<TInputProps, 'variant' | 'size'> {
  label?: string;
  variant?: InputVariant;
  size?: 'sm' | 'md';
  rightElement?: ButtonProps;
  errorMessage?: string;
}

const Input = forwardRef<TamaguiElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'solid',
      label = '',
      errorMessage = '',
      rightElement,
      ...rest
    },
    ref
  ) => {
    const variantObject = useMemo(
      () => (variant ? { [variant]: true } : {}),
      [variant]
    );

    return (
      <XStack position="relative" zIndex={1} alignItems="center">
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledInput
          testID="input"
          ref={ref}
          size={size}
          {...variantObject}
          {...rest}
        />
        {rightElement && (
          <IconButton
            aria-label="Icon"
            backgroundColor="transparent"
            padding={0}
            right="$4"
            hoverStyle={{
              backgroundColor: 'transparent',
            }}
            pressStyle={{
              backgroundColor: 'transparent',
            }}
            position="absolute"
            {...rightElement}
          />
        )}
        {errorMessage && (
          <StyledErrorMessage error>{errorMessage}</StyledErrorMessage>
        )}
      </XStack>
    );
  }
);

export default memo(Input, isEqual);
