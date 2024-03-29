import {
  Label,
  XStack,
  styled,
  CheckboxProps as TCheckboxProps,
  Checkbox as TCheckbox,
} from 'tamagui';
import { useId, memo } from 'react';

import { CheckIcon } from '../icons';

const CheckboxFrame = styled(TCheckbox, {
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$small',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    checked: {
      indeterminate: {},
      true: {
        backgroundColor: '$primary',
      },
      false: {
        backgroundColor: '$secondary',
      },
    },

    size: {
      md: {
        width: '$5',
        height: '$5',
      },
    },
  } as const,

  defaultVariants: {
    checked: false,
    size: 'md',
  },
});

const StyledLabel = styled(Label, {
  variants: {
    checked: {
      indeterminate: {},
      true: {
        color: '$primary',
      },
      false: {
        color: '$textDefault',
      },
    },

    size: {
      md: {
        fontSize: '$4.5',
      },
    },
  } as const,

  defaultVariants: {
    size: 'md',
  },
});

interface CheckboxProps extends Omit<TCheckboxProps, 'size'> {
  label?: string;
  size?: 'md';
}

const Checkbox = ({
  size = 'md',
  label = '',
  checked = false,
  ...rest
}: CheckboxProps) => {
  const id = useId();

  return (
    <XStack width={300} alignItems="center" gap="$2">
      <CheckboxFrame id={id} size={size} checked={checked} {...rest}>
        <TCheckbox.Indicator>
          <CheckIcon />
        </TCheckbox.Indicator>
      </CheckboxFrame>

      {label && (
        <StyledLabel checked={checked} size={size} htmlFor={id}>
          {label}
        </StyledLabel>
      )}
    </XStack>
  );
};

export default memo(Checkbox);
