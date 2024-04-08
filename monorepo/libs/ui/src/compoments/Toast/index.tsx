import { useState, useCallback, useEffect } from 'react';
import { XStack } from 'tamagui';

import { CloseIcon } from '../icons';
import Text from '../Text';

interface ToastProps {
  variant: 'success' | 'error';
  message: string;
  timeOut?: number;
}

export const Toast = ({
  variant = 'success',
  message,
  timeOut = 3000,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(!!message);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        clearTimeout(timer);
      }, timeOut);
    }
  }, [isVisible, timeOut]);

  const closeToast = useCallback(() => setIsVisible(false), []);

  return isVisible ? (
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
    >
      <Text color="$textSecondary">{message}</Text>
      <CloseIcon color="$textSecondary" onPress={closeToast} />
    </XStack>
  ) : null;
};

export default Toast;
