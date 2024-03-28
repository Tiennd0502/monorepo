import { Meta, StoryObj } from '@storybook/react';

import { ORDERS } from '@monorepo/constants';

import OrderCard from '.';

const meta: Meta<typeof OrderCard> = {
  title: 'Components/OrderCard',
  component: OrderCard,
};

export default meta;

type Story = StoryObj<typeof OrderCard>;

export const Default: Story = {
  args: {
    item: ORDERS[0],
    onViewDetail: (id: string) => null,
  },
};
