import { Meta, StoryObj } from '@storybook/react';

import Rating from '.';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
  },
};

export const HalfGrad: Story = {
  args: {
    value: 3.5,
    size: 20,
  },
};
