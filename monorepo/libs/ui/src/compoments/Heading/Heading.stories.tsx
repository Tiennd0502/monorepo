import { Meta, StoryObj } from '@storybook/react';

import Heading from '.';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Default heading',
  },
};

export const Large: Story = {
  args: {
    children: 'Heading large',
    size: 'large',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Heading extraLarge',
    size: 'extraLarge',
  },
};
