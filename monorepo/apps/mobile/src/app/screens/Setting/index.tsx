import { useMemo } from 'react';
import { ScrollView, Stack, XStack } from 'tamagui';

// Types
import { StackScreenProps } from '../../types';

// Stores
import { userStore } from '@monorepo/stores';

// Components
import {
  EditIcon,
  Input,
  ProfileCard,
  Switch,
  Text,
  shadows,
} from '@monorepo/ui';
import { MainLayout } from '../../components';

interface SettingProps {
  navigation: StackScreenProps;
}

const Setting = ({ navigation }: SettingProps) => {
  const [user] = userStore((state) => [state.user]);

  const { first_name = '', last_name = '', email = '' } = user || {};

  const notifications = useMemo(
    () => [
      {
        id: '01',
        label: 'Sales',
        isActive: true,
        isDisabled: false,
      },
      {
        id: '02',
        label: 'New Arriavals',
        isActive: false,
        isDisabled: false,
      },
      {
        id: '03',
        label: 'Delivery status changes',
        isActive: false,
        isDisabled: true,
      },
    ],
    []
  );

  const helpers = useMemo(
    () => [
      {
        id: '01',
        label: 'FAQ',
        href: '',
      },
      {
        id: '02',
        label: 'Contact Us',
        href: '',
      },
      {
        id: '03',
        label: 'Privacy & Terms',
        href: '',
      },
    ],
    []
  );

  return (
    <MainLayout padding={0}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack flex={1} gap="$5" marginTop="$4" paddingBottom="$5">
          {/* Personal information */}
          <Stack paddingHorizontal="$5" rowGap="$3.75">
            <XStack justifyContent="space-between">
              <Text color="$textTertiary" size="extraMedium">
                Personal Information
              </Text>
              <EditIcon color="$textLabel" />
            </XStack>
            <Stack flex={1} gap="$5">
              <Input
                readOnly
                variant="solid"
                label="Name"
                defaultValue={`${first_name} ${last_name}`}
                placeholder="User name"
                style={shadows.input}
              />
              <Input
                readOnly
                variant="solid"
                label="Email"
                defaultValue={email}
                placeholder="Email"
                style={shadows.input}
              />
            </Stack>
          </Stack>

          {/* Password */}
          <Stack paddingHorizontal="$5" rowGap="$3.75">
            <XStack justifyContent="space-between">
              <Text color="$textTertiary" size="extraMedium">
                Password
              </Text>
              <EditIcon color="$textLabel" />
            </XStack>
            <Stack flex={1}>
              <Input
                readOnly
                variant="solid"
                label="Password"
                defaultValue="***************"
                placeholder="Name"
                style={shadows.input}
              />
            </Stack>
          </Stack>

          {/* Notification */}
          <Stack paddingHorizontal="$5" gap="$3.75">
            <Text color="$textTertiary" size="extraMedium">
              Notifications
            </Text>
            <Stack flex={1} gap="$5" padding={0}>
              {notifications.map(({ id, label, isActive, isDisabled }) => (
                <XStack
                  key={id}
                  height="$13.5"
                  paddingHorizontal="$4"
                  alignItems="center"
                  justifyContent="space-between"
                  backgroundColor="$backgroundSecondary"
                  borderRadius="$1"
                  style={shadows.card}
                >
                  <Text color="$textPrimary" size="extraMedium">
                    {label}
                  </Text>
                  <Switch disabled={isDisabled} defaultChecked={isActive} />
                </XStack>
              ))}
            </Stack>
          </Stack>

          {/* Help Center */}
          <Stack paddingHorizontal="$5" gap="$3.75">
            <Text color="$textTertiary" size="extraMedium">
              Help Center
            </Text>
            {helpers.map(({ id, label, href }) => {
              const handleClick = () => navigation.navigate(href);

              return (
                <ProfileCard
                  borderRadius="$1"
                  key={id}
                  title={label}
                  onPress={handleClick}
                />
              );
            })}
          </Stack>
        </Stack>
      </ScrollView>
    </MainLayout>
  );
};

export default Setting;
