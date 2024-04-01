import { Meta, StoryObj } from '@storybook/react';

import { CATEGORIES } from '@monorepo/constants';
import CategoryItem from '.';

const meta: Meta<typeof CategoryItem> = {
  title: 'Components/CategoryItem',
  component: CategoryItem,
};

export default meta;

type Story = StoryObj<typeof CategoryItem>;

export const Default: Story = {
  args: {
    item: CATEGORIES[0],
  },
};

export const Active: Story = {
  args: {
    item: CATEGORIES[0],
    isActive: true,
  },
};
