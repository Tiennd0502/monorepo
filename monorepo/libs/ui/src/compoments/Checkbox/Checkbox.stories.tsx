import { Meta, StoryObj } from '@storybook/react';

import Checkbox from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Label checkbox',
  },
};

export const Checked: Story = {
  args: {
    label: 'Label checkbox',
    defaultChecked: true,
  },
};
