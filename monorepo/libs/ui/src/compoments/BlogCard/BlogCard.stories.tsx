import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';

import { BLOGS } from '@monorepo/mocks';

import BlogCard from '.';

const meta: Meta<typeof BlogCard> = {
  title: 'Components/BlogCard',
  component: BlogCard,
  decorators: [
    (Story) => (
      <Stack width={450} paddingTop={20}>
        <Story />
      </Stack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    item: BLOGS[0],
    onPress: () => null,
  },
};

export const Favorite: Story = {
  args: {
    isReview: true,
    item: BLOGS[0],
    onPress: () => null,
  },
};
