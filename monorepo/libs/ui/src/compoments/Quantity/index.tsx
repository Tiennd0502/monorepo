import { memo, useCallback, useMemo, useState } from 'react';

import Text from '../Text';
import { AddIcon, MinusIcon } from '../icons';
import { XStack, YStack } from 'tamagui';

interface QuantityProps {
  defaultValue?: number;
  onChangeValue: (value: number) => void;
}

const Quantity = ({ defaultValue = 0, onChangeValue }: QuantityProps) => {
  const [number, setNumber] = useState<number>(defaultValue);

  const isDisabled = useMemo(() => number <= 1, [number]);

  const handleIncrement = useCallback(() => {
    const result = number + 1;

    setNumber(result);
    onChangeValue(result);
  }, [number, onChangeValue]);

  const handleDecrement = useCallback(() => {
    setNumber(number - 1);
    onChangeValue(number - 1);
  }, [number, onChangeValue]);

  return (
    <XStack gap="$3" alignItems="center">
      <YStack
        testID='increment'
        alignItems="center"
        justifyContent="center"
        width="$7.5"
        height="$7.5"
        backgroundColor="$backgroundIcon"
        borderRadius="$2"
        onPress={handleIncrement}
      >
        <AddIcon />
      </YStack>
      <Text size="large" color="$primary" fontWeight="600">
        {number <= 9 ? '0' : ''}
        {number}
      </Text>
      <YStack
        testID='decrement'
        alignItems="center"
        justifyContent="center"
        disabled={isDisabled}
        onPress={handleDecrement}
        width="$7.5"
        height="$7.5"
        backgroundColor={
          isDisabled ? '$backgroundIconDisabled' : '$backgroundIcon'
        }
        borderRadius="$2"
      >
        <MinusIcon />
      </YStack>
    </XStack>
  );
};

export default memo(Quantity);
