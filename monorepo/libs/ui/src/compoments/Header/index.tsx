import { ReactNode, memo } from 'react';

import { YStack, XStack } from 'tamagui';
import Heading from '../Heading';

interface HeaderProps {
  startIcon?: ReactNode;
  title?: string;
  subTitle?: string;
  endIcon?: ReactNode;
}

const Header = ({ startIcon, title, subTitle, endIcon }: HeaderProps) => {
  return (
    <XStack justifyContent="space-between" alignItems="center">
      <YStack width="$10">{startIcon}</YStack>
      <YStack alignItems="center">
        {subTitle && (
          <Heading fontWeight="600" color="$textTertiary">
            {subTitle}
          </Heading>
        )}
        {title && <Heading color="$primary">{title}</Heading>}
      </YStack>
      <YStack width="$10">{endIcon}</YStack>
    </XStack>
  );
};

export default memo(Header);
