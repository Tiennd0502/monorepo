import { memo } from 'react';
import { Stack, XStack } from 'tamagui';

import Text from '../Text';
import { shadows } from '../../themes';
import { ChevronRightIcon } from '../icons';

interface ProfileCardProps extends CSSProps {
  title: string;
  description?: string;
  onPress: () => void;
}

const ProfileCard = ({
  title,
  description = '',
  onPress,
  ...props
}: ProfileCardProps) => (
  <XStack
    paddingVertical="$5"
    paddingLeft="$5"
    paddingRight="$2.5"
    backgroundColor="$secondary"
    alignItems="center"
    justifyContent="space-between"
    style={shadows.card}
    onPress={onPress}
  >
    <Stack gap="$1.5">
      <Text bold color="$primary" size="large">
        {title}
      </Text>
      {description && (
        <Text color="$textLabel" fontSize="$3">
          {description}
        </Text>
      )}
    </Stack>
    <ChevronRightIcon />
  </XStack>
);

export default memo(ProfileCard);
