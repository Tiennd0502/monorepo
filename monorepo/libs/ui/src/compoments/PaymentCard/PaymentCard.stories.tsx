import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';

import { PAYMENT_CARDS } from '@monorepo/constants';
import PaymentCard from '.';

const meta: Meta<typeof PaymentCard> = {
  title: 'Components/PaymentCard',
  component: PaymentCard,
  decorators: [
    (Story) => (
      <Stack width={450}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PaymentCard>;

export const Default: Story = {
  args: {
    item: PAYMENT_CARDS[0],
  },
};

export const MasterCard: Story = {
  args: {
    item: PAYMENT_CARDS[1],
  },
};

export const VisaCard: Story = {
  args: {
    item: PAYMENT_CARDS[2],
  },
};
