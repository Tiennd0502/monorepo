import { Meta, StoryObj } from '@storybook/react';

import Switch from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
