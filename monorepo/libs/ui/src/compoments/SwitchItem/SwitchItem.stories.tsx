import { Meta, StoryObj } from '@storybook/react';

import SwitchItem from '.';
import { Stack } from 'tamagui';

const meta: Meta<typeof SwitchItem> = {
  title: 'Components/SwitchItem',
  component: SwitchItem,
  decorators: [
    (Story) => (
      <Stack width={450}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SwitchItem>;

const defaultArgs = {
  label: 'Switch Label',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    ...defaultArgs,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    ...defaultArgs,
  },
};
