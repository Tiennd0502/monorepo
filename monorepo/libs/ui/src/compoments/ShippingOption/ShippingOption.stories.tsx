import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';

import ShippingOption from '.';
import { SHIPPING_ADDRESS } from '@monorepo/mocks';

const meta: Meta<typeof ShippingOption> = {
  title: 'Components/ShippingOption',
  component: ShippingOption,
  decorators: [
    (Story) => (
      <Stack width={450}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ShippingOption>;

export const Default: Story = {
  args: {
    label: 'Use as the shipping address',
    isActive: false,
    onCheckedChange: () => null,
    item: SHIPPING_ADDRESS[0],
    onEditItem: () => null,
  },
};

export const Active: Story = {
  args: {
    label: 'Use as the shipping address',
    isActive: true,
    onCheckedChange: () => null,
    item: SHIPPING_ADDRESS[0],
    onEditItem: () => null,
  },
};
