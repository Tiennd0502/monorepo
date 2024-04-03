import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';

import { PRODUCTS } from '@monorepo/mocks';
import CartItem from '.';

const meta: Meta<typeof CartItem> = {
  title: 'Components/CartItem',
  component: CartItem,
  decorators: [
    (Story) => (
      <Stack width={500}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {
    item: PRODUCTS[0],
    quantity: 2,
    onDelete: (id: string) => null,
    onChangeQuantity: (value: number) => null,
  },
};

export const Favorite: Story = {
  args: {
    isFavorites: true,
    item: PRODUCTS[0],
    onDelete: (id: string) => null,
  },
};
