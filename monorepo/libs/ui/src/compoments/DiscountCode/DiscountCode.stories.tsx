import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';

import DiscountCode from '.';

const meta: Meta<typeof DiscountCode> = {
  title: 'Components/DiscountCode',
  component: DiscountCode,
  decorators: [
    (Story) => (
      <Stack width={400}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DiscountCode>;

export const Default: Story = {
  args: {
    value: '',
    onSubmit: (value: string) => null,
  },
};

export const Code: Story = {
  args: {
    value: '#23fw12',
    onSubmit: (value: string) => null,
  },
};
