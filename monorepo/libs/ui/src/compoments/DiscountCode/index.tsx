import { memo, useCallback, useState } from 'react';
import { Stack } from 'tamagui';

// Themes | Components
import Input from '../Input';
import IconButton from '../IconButton';

import { shadows } from '../../themes';
import { ChevronRightIcon, DeleteIcon } from '../icons';

interface DiscountCodeProps {
  value?: string;
  onSubmit: (value: string) => void;
}

const DiscountCode = ({ value = '', onSubmit }: DiscountCodeProps) => {
  const [code, setCode] = useState<string>(value);
  const [isDeleteIcon, toggleIcon] = useState<boolean>(!!value);

  const handleSubmit = useCallback(() => {
    onSubmit(code);
    toggleIcon((prev) => !prev);
  }, [code, onSubmit]);

  const handleChangeText = useCallback((text: string) => {
    setCode(text);
  }, []);

  const handleResetValue = useCallback(() => {
    if (code) {
      setCode('');
      onSubmit('');
      toggleIcon((prev) => !prev);
    }
  }, [onSubmit, code]);

  return (
    <Stack position="relative" zIndex="$2">
      <Input
        testID='input'
        position="absolute"
        top={0}
        width="100%"
        height="$11"
        value={code}
        variant="flushed"
        paddingVertical={10}
        backgroundColor="$secondary"
        placeholder="Enter your promo code"
        borderRadius="$2"
        style={shadows.input}
        onChangeText={handleChangeText}
      />
      <IconButton
        testID='icon'
        solid
        position="absolute"
        top={0}
        zIndex={2}
        right={0}
        height="$11"
        width="$11"
        borderRadius="$2"
        backgroundColor="$primary"
        onPress={isDeleteIcon ? handleResetValue : handleSubmit}
      >
        {isDeleteIcon ? (
          <DeleteIcon color="$secondary" />
        ) : (
          <ChevronRightIcon color="$secondary" />
        )}
      </IconButton>
    </Stack>
  );
};

export default memo(DiscountCode);
