import { memo, useCallback, useMemo } from 'react';
import { Stack, Image, XStack } from 'tamagui';

import { NEW_STATUS, New } from '@monorepo/types';
import Text from '../Text';

interface NotificationProps extends New {
  onPress: (id: string) => void;
}

const Notification = ({
  id,
  image,
  title,
  status,
  description,
  onPress,
}: NotificationProps) => {
  const handleClick = useCallback(() => onPress(id), [id, onPress]);

  const isStatusNormal = useMemo(() => status === NEW_STATUS.NORMAL, [status]);

  return (
    <XStack
      onPress={handleClick}
      padding="$5"
      columnGap="$3"
      position="relative"
      backgroundColor={isStatusNormal ? 'transparent' : '$backgroundTertiary'}
    >
      {image && (
        <Image
          width="$17.5"
          height="$17.5"
          borderRadius="$2"
          source={{ uri: image }}
        />
      )}
      <Stack flex={1} rowGap={5}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          color="$primary"
          fontWeight="bold"
          fontSize={image ? '$3' : '$3.5'}
        >
          {title}
        </Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          textAlign="justify"
          fontSize="$2.5"
          color="$textLabel"
          lineHeight={15}
        >
          {description}
        </Text>
        {!isStatusNormal && (
          <Text
            position="absolute"
            right={0}
            bottom={-12}
            fontWeight="bold"
            color={
              status === NEW_STATUS.NEW ? '$successPrimary' : '$errorPrimary'
            }
          >
            {status}
          </Text>
        )}
      </Stack>
    </XStack>
  );
};

export default memo(Notification);
