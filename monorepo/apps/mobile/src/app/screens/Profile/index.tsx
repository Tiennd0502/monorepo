import { memo, useMemo, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack } from 'tamagui';

// Types
import { SCREENS } from '../../types';

// Constants
import { AUTH_STORE_KEY } from '@monorepo/constants';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore, userStore } from '@monorepo/stores';

// Components
import {
  Header,
  Avatar,
  ProfileCard,
  SearchIcon,
  LogOutIcon,
} from '@monorepo/ui';

const Profile = ({ navigation }) => {
  const {
    logOut: { mutate },
  } = useAuth();

  const [removeAuth] = authStore((state) => [state.removeAuth]);
  const [user, removeUser] = userStore((state) => [
    state.user,
    state.removeUser,
  ]);

  const {
    id = '',
    first_name = '',
    last_name = '',
    email = '',
    profile_pic = '',
  } = user || {};

  const profiles = useMemo(
    () => [
      {
        key: SCREENS.ORDER,
        title: 'My orders',
        description: 'Already have 10 orders',
        href: SCREENS.ORDER,
      },
      {
        key: SCREENS.SHIPPING_ADDRESS,
        title: 'Shipping Address',
        description: '03 Addresses',
        href: SCREENS.SHIPPING_ADDRESS,
      },
      {
        key: SCREENS.PAYMENT_METHOD,
        title: 'Payment Method',
        description: 'You have 2 cards',
        href: SCREENS.PAYMENT_METHOD,
      },
      {
        key: SCREENS.REVIEW,
        title: 'My reviews',
        description: 'Reviews for 5 items',
        href: SCREENS.REVIEW,
      },
      {
        key: SCREENS.SETTING,
        title: 'Setting',
        description: 'Notification, Password. FAQ, Contact',
        href: SCREENS.SETTING,
      },
    ],
    []
  );

  const handleLogOut = useCallback(() => {
    AsyncStorage.removeItem(AUTH_STORE_KEY);
    removeUser();
    removeAuth();

    id &&
      mutate(id, {
        onError: (error) => {
          console.log(error);
        },
      });
    navigation.navigate(SCREENS.AUTH_STACK);
  }, [id, mutate, navigation, removeUser, removeAuth]);

  return (
    <Stack flex={1} gap="$6" padding="$5" backgroundColor="$secondary">
      <Header
        title="Profile"
        startIcon={<SearchIcon />}
        endIcon={<LogOutIcon onPress={handleLogOut} />}
      />
      <Avatar
        name={first_name + ' ' + last_name}
        email={email}
        avatar={profile_pic}
      />
      <Stack gap="$5" marginTop="$5">
        {profiles.map(({ key, title, description, href }) => {
          const handleChangeView = () => navigation.navigate(href);

          return (
            <ProfileCard
              key={key}
              title={title}
              description={description}
              onPress={handleChangeView}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default memo(Profile);
