import { Meta, StoryObj } from '@storybook/react';

import { USER } from '@monorepo/constants';

import Avatar from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: USER,
};
