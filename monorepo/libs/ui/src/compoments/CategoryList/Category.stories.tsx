import { Meta, StoryObj } from '@storybook/react';

import { CATEGORIES } from '@monorepo/mocks';

import CategoryList from '.';

const meta: Meta<typeof CategoryList> = {
  title: 'Components/CategoryList',
  component: CategoryList,
};

export default meta;

type Story = StoryObj<typeof CategoryList>;

export const Default: Story = {
  args: {
    list: CATEGORIES,
    onChange: () => null,
  },
};
