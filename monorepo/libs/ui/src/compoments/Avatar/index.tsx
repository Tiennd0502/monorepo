import { memo } from 'react';
import { Image, Stack, XStack } from 'tamagui';

import { AVATAR_DEFAULT } from '@monorepo/constants';
import Text from '../Text';

export interface AvatarProps {
  name: string;
  email: string;
  avatar?: string;
}

const Avatar = ({ name, email, avatar }: AvatarProps) => {
  return (
    <XStack gap="$5" alignItems="center">
      <Stack width="$20" height="$20" borderRadius="$20" overflow="hidden">
        <Image
          width="100%"
          height="100%"
          source={{ uri: avatar || AVATAR_DEFAULT }}
          resizeMode="cover"
          alt="Avatar"
        />
      </Stack>
      <Stack gap="$1">
        <Text color="$primary" fontSize="$5" fontWeight="bold">
          {name}
        </Text>
        <Text color="$textLabel">{email}</Text>
      </Stack>
    </XStack>
  );
};

export default memo(Avatar);
