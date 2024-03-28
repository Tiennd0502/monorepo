import { Meta, StoryObj } from '@storybook/react';

import ProfileCard from '.';

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
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
