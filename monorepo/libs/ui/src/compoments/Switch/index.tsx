import {
  Label,
  Stack,
  XStack,
  YStack,
  styled,
  createSwitch,
  SwitchProps as TSwitchProps,
} from 'tamagui';
import { useId } from 'react';

const Frame = styled(Stack, {
  width: '$10',
  height: '$6',
  borderRadius: '$3.75',
  borderWidth: 0,
  padding: '$0.5',

  variants: {
    checked: {
      indeterminate: {},
      true: {
        backgroundColor: '$successPrimary',
      },
      false: {
        backgroundColor: '$backgroundDisabled',
      },
    },

    disabled: {
      true: {
        opacity: 0.2,
      },
    },
  } as const,

  defaultVariants: {
    checked: false,
  },
});

const Thumb = styled(Stack, {
  width: '$5',
  height: '$5',
  backgroundColor: '$secondary',
  borderRadius: '$5',

  variants: {
    checked: {
      indeterminate: {
        backgroundColor: '$secondary',
      },
      true: {},
      false: {},
    },
  } as const,
});

export const SwitchBase = createSwitch({
  Frame,
  Thumb,
});

interface SwitchProps extends Omit<TSwitchProps, ''> {
  label?: string;
}

const Switch = ({ label, ...props }: SwitchProps) => {
  const id = useId();

  return (
    <YStack alignItems="center" gap="$3">
      <XStack gap="$2" alignItems="center">
        {label && (
          <Label htmlFor={id} color="$textDefault">
            {label}
          </Label>
        )}
        <SwitchBase testID='switch' id={id} {...props}>
          <SwitchBase.Thumb animation="quick" />
        </SwitchBase>
      </XStack>
    </YStack>
  );
};

export default Switch;
