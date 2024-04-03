import { Stack } from 'tamagui';
import { Meta, StoryObj } from '@storybook/react';

import ProductCard from '.';
import { PRODUCTS } from '@monorepo/mocks';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  decorators: [
    (Story) => (
      <Stack width={180}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    item: PRODUCTS[2],
  },
};
