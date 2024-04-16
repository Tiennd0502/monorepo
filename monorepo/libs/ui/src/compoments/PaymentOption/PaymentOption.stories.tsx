import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';

import { PAYMENT_CARDS } from '@monorepo/mocks';
import PaymentOption from '.';

const meta: Meta<typeof PaymentOption> = {
  title: 'Components/PaymentOption',
  component: PaymentOption,
  decorators: [
    (Story) => (
      <Stack width={450}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PaymentOption>;

export const Default: Story = {
  args: {
    label: 'Use as default payment method',
    item: PAYMENT_CARDS[0],
  },
};

export const Active: Story = {
  args: {
    label: 'Use as default payment method',
    isActive: true,
    item: PAYMENT_CARDS[0],
  },
};
