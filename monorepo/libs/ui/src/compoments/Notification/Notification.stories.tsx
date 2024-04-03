import { Stack } from 'tamagui';
import { Meta, StoryObj } from '@storybook/react';

import { NOTIFICATIONS } from '@monorepo/mocks';

import Notification from '.';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  decorators: [
    (Story) => (
      <Stack width={450}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    ...NOTIFICATIONS[3],
    onPress: () => null,
  },
};

export const New: Story = {
  args: {
    ...NOTIFICATIONS[0],
    onPress: () => null,
  },
};

export const Hot: Story = {
  args: {
    ...NOTIFICATIONS[2],
    onPress: () => null,
  },
};
