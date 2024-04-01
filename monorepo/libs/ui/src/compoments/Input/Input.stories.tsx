import { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    paddingHorizontal: 20,
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Username:',
    placeholder: 'Enter username',
  },
};

export const OutLined: Story = {
  args: {
    variant: 'outlined',
    label: 'Username:',
    placeholder: 'Enter username',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Username:',
    placeholder: 'Enter username',
  },
};

export const Flushed: Story = {
  args: {
    variant: 'flushed',
    label: 'Username:',
    placeholder: 'Enter username',
  },
};
