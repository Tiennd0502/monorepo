import { Meta, StoryObj } from '@storybook/react';

import Text from '.';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
};

export const Error: Story = {
  args: {
    error: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
};

export const Bold: Story = {
  args: {
    bold: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
};
