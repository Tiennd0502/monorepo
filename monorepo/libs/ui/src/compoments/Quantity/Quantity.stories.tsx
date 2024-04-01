import { Meta, StoryObj } from '@storybook/react';

import Quantity from '.';

const meta: Meta<typeof Quantity> = {
  title: 'Components/Quantity',
  component: Quantity,
};

export default meta;

type Story = StoryObj<typeof Quantity>;

export const Default: Story = {
  args: {
    onChangeValue: () => null,
  },
};
