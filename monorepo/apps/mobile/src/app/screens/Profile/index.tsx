import { useMemo } from 'react';
import { Stack } from 'tamagui';

// Types
import { SCREENS, ProfileScreenProps } from '../../types';

// Hooks | Stores
import { userStore } from '@monorepo/stores';

// Components
import { Avatar, ProfileCard } from '@monorepo/ui';
import { MainLayout } from '../../components';

interface ProfileProps {
  navigation: ProfileScreenProps;
}

const Profile = ({ navigation }: ProfileProps) => {
  const [user] = userStore((state) => [state.user]);

  const {
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

  return (
    <MainLayout>
      <Stack gap="$6">
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
    </MainLayout>
  );
};

export default Profile;
