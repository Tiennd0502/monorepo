import {
  styled,
  InputProps as TInputProps,
  Input as TInput,
  XStack,
  Button,
} from 'tamagui';
import { memo, useCallback, useMemo, useState } from 'react';

import { Text } from '..';

import { HiddenIcon, ShowIcon } from '../icons';

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

  variants: {
    solid: {
      true: {
        backgroundColor: '$primary',
        color: '$textSecondary',
        borderColor: '$primary',
      },
    },

    outlined: {
      true: {
        backgroundColor: '$secondary',
        borderColor: '$borderSecondary',
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
  left: 0,
  marginBottom: -20,

  variants: {
    size: {
      md: {
        fontSize: '$3',
      },
    },
  } as const,
});

const IconInput = styled(Button, {
  position: 'absolute',
  zIndex: '$2',
  right: '$4',
  color: '$textLabel',

  hoverStyle: {
    backgroundColor: 'transparent',
    opacity: 0.7,
  },

  focusStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    outlineColor: 'transparent',
  },

  variants: {
    chromeless: {
      true: {
        backgroundColor: 'transparent',
      },
    },

    size: {
      sm: {
        top: '$2',
      },

      md: {
        top: '$4',
      },
    },
  } as const,

  defaultVariants: {
    size: 'md',
  },
});

interface InputProps extends Omit<TInputProps, 'variant' | 'size'> {
  label?: string;
  variant?: 'outlined' | 'solid' | 'flushed' | 'disabled';
  size?: 'sm' | 'md';
  isPassword?: boolean;
  errorMessage?: string;
}

const Input = StyledInput.styleable<InputProps>(
  (
    {
      size = 'md',
      variant = 'solid',
      label = '',
      isPassword = false,
      errorMessage = '',
      ...rest
    },
    ref
  ) => {
    const variantObject = useMemo(
      () => (variant ? { [variant]: true } : {}),
      [variant]
    );

    const [show, setShow] = useState<boolean>(false);

    const handleToggle = useCallback(() => {
      console.log('Change', show);
      setShow((prev) => !prev);
    }, [show]);

    const Icon = useMemo(() => (show ? HiddenIcon : ShowIcon), [show]);

    return (
      <XStack position="relative" zIndex={1}>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledInput
          ref={ref}
          secureTextEntry={isPassword && !show}
          size={size}
          {...(isPassword && {
            paddingRight: '$12',
          })}
          {...variantObject}
          {...rest}
        />
        {isPassword && (
          <IconInput chromeless>
            <Icon onPress={handleToggle} />
          </IconInput>
        )}
        {errorMessage && (
          <StyledErrorMessage error>{errorMessage}</StyledErrorMessage>
        )}
      </XStack>
    );
  }
);

export default memo(Input);
