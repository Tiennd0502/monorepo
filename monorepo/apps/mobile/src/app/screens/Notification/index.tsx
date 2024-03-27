import { useCallback } from 'react';
import { ScrollView, Stack } from 'tamagui';

// Constants
import { NOTIFICATIONS } from '@monorepo/constants';

// Types
import { NEW_STATUS } from '@monorepo/types';

// Components
import { Notification, Header, SearchIcon, Divider } from '@monorepo/ui';

const NotificationScreen = () => {
  const handleViewDetail = useCallback(() => null, []);

  const handleSearch = useCallback(() => null, []);

  return (
    <Stack flex={1} backgroundColor="$secondary">
      <Stack padding="$5">
        <Header
          title="Notification"
          startIcon={<SearchIcon onPress={handleSearch} />}
        />
      </Stack>
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
