import { Meta, StoryObj } from '@storybook/react';

import TabItem from '.';
import { ORDER_TABS } from '@monorepo/constants';

const meta: Meta<typeof TabItem> = {
  title: 'Components/TabItem',
  component: TabItem,
  args: {},
};

export default meta;

type Story = StoryObj<typeof TabItem>;

export const Default: Story = {
  args: {
    label: ORDER_TABS[2],
  },
};

export const Active: Story = {
  args: {
    isActive: true,
    label: ORDER_TABS[2],
  },
};
