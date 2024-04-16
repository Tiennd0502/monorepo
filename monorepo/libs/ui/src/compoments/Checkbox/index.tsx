import {
  Label,
  XStack,
  styled,
  CheckboxProps as TCheckboxProps,
  createCheckbox,
  Stack,
  SizeTokens,
} from 'tamagui';

import { useId, memo } from 'react';

import { CheckIcon } from '../icons';

const Frame = styled(Stack, {
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$1',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$secondary',

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
  } as const,

  defaultVariants: {
    checked: false,
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
  } as const,
});

interface CheckboxProps extends Omit<TCheckboxProps, ''> {
  label?: string;
  size?: SizeTokens;
}

const Indicator = styled(Stack, {});

export const Component = createCheckbox({
  Frame,
  Indicator,
});

const Checkbox = ({
  size = '$11',
  label = '',
  checked,
  value,
  ...rest
}: CheckboxProps) => {
  const id = useId();

  return (
    <XStack width={300} alignItems="center" gap="$2">
      <Component id={id} size={size} checked={checked} {...rest}>
        <Component.Indicator backgroundColor="$transparent">
          <CheckIcon />
        </Component.Indicator>
      </Component>

      {label && (
        <StyledLabel checked={checked} fontSize="$4.5" htmlFor={id}>
          {label}
        </StyledLabel>
      )}
    </XStack>
  );
};

export default memo(Checkbox);
