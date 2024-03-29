import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';

import ProfileCard from '.';

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  decorators: [
    (Story) => (
      <Stack width={500}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    title: 'My Orders',
    description: 'Already have 10 orders',
    onPress: () => null,
  },
};
