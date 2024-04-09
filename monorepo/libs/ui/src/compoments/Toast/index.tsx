import { memo, useEffect } from 'react';
import { XStack, StackProps } from 'tamagui';
import isEqual from 'react-fast-compare';

import { CloseIcon } from '../icons';
import Text from '../Text';

interface ToastProps extends StackProps {
  variant: 'success' | 'error';
  message: string;
  timeOut?: number;
  onClose: () => void;
}

export const Toast = ({
  variant = 'success',
  message,
  timeOut = 3000,
  onClose,
  ...props
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
      clearTimeout(timer);
    }, timeOut);
  }, [timeOut, onClose]);

  return (
    <XStack
      position="absolute"
      zIndex="$5"
      right="$4"
      backgroundColor={
        variant === 'error' ? '$errorPrimary' : '$successPrimary'
      }
      paddingVertical="$2"
      paddingHorizontal="$3"
      borderRadius="$2"
      gap="$3"
      {...props}
    >
      <Text color="$textSecondary">{message}</Text>
      <CloseIcon color="$textSecondary" onPress={onClose} />
    </XStack>
  );
};

export default memo(Toast, isEqual);
