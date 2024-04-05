import { useCallback } from 'react';
import { ScrollView, Stack } from 'tamagui';

// Constants
import { NOTIFICATIONS } from '@monorepo/mocks';

// Types
import { NEW_STATUS } from '@monorepo/types';

// Components
import { Notification, Divider } from '@monorepo/ui';

const NotificationScreen = () => {
  const handleViewDetail = useCallback(() => null, []);

  return (
    <Stack flex={1} backgroundColor="$secondary" paddingTop="$4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {NOTIFICATIONS.map((item, index) => (
          <Stack flex={1} key={item.id}>
            <Notification {...item} onPress={handleViewDetail} />
            {item.status === NEW_STATUS.NORMAL &&
              index !== NOTIFICATIONS.length && (
                <Stack paddingHorizontal="$5">
                  <Divider marginRight="$5" color="$backgroundTertiary" />
                </Stack>
              )}
          </Stack>
        ))}
      </ScrollView>
    </Stack>
  );
};

export default NotificationScreen;
