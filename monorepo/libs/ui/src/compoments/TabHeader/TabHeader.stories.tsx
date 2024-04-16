import { Meta, StoryObj } from '@storybook/react';

import TabHeader from '.';
import { ORDER_TABS } from '@monorepo/constants';

const meta: Meta<typeof TabHeader> = {
  title: 'Components/TabHeader',
  component: TabHeader,
  args: {
    paddingHorizontal: 20,
    width: 600,
  },
};

export default meta;

type Story = StoryObj<typeof TabHeader>;

export const Default: Story = {
  args: {
    tab: ORDER_TABS,
    value: Object.entries(ORDER_TABS)[0][0],
  },
};
