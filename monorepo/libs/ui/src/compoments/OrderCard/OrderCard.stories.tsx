import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';

import { ORDERS } from '@monorepo/constants';

import OrderCard from '.';

const meta: Meta<typeof OrderCard> = {
  title: 'Components/OrderCard',
  component: OrderCard,
  decorators: [
    (Story) => (
      <Stack width={450}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof OrderCard>;

export const Default: Story = {
  args: {
    item: ORDERS[0],
    onViewDetail: (id: string) => null,
  },
};
