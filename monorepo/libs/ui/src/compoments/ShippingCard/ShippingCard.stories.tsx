import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';

import ShippingCard from '.';
import { SHIPPING_ADDRESS } from '@monorepo/mocks';

const meta: Meta<typeof ShippingCard> = {
  title: 'Components/ShippingCard',
  component: ShippingCard,
  decorators: [
    (Story) => (
      <Stack width={450}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ShippingCard>;

export const Default: Story = {
  args: {
    item: SHIPPING_ADDRESS[0],
    onEdit: () => null,
  },
};

export const NoEdit: Story = {
  args: {
    item: SHIPPING_ADDRESS[0],
    onEdit: undefined,
  },
};
