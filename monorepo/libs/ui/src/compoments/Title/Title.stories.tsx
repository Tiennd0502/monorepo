import { Meta, StoryObj } from '@storybook/react';

import Title from '.';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

const defaultArgs = {
  label: 'Lorem ipsum dolor sit amet',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const DisableIconEdit: Story = {
  args: {
    ...defaultArgs,
    disabledIcon: true,
  },
};
