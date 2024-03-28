import { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    paddingHorizontal: 20,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const OutLined: Story = {
  args: {
    variant: 'outlined',
    children: 'OutLined',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const ChromeLess: Story = {
  args: {
    variant: 'chromeless',
    children: 'Chromeless',
  },
};
