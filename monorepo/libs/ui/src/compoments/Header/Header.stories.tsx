import { Meta, StoryObj } from '@storybook/react';

import Header from '.';
import { CartIcon, ChevronLeftIcon } from '../icons';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

const Render = () => ({
  subTitle: 'Make home',
  title: 'BEAUTIFUL',
  startIcon: <ChevronLeftIcon />,
  endIcon: <CartIcon />,
});

export const Default: Story = {
  args: {
    subTitle: 'Make home',
    title: 'BEAUTIFUL',
    startIcon: <ChevronLeftIcon />,
    endIcon: <CartIcon />,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Profile',
  },
};

export const HasStartIcon: Story = {
  args: {
    title: 'BEAUTIFUL',
    startIcon: <ChevronLeftIcon />,
  },
};
