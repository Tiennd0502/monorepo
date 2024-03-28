import { TamaguiProvider } from '@monorepo/provider';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F1F1F1' },
        { name: 'dark', value: '#33404A' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <TamaguiProvider>
        <Story />
      </TamaguiProvider>
    ),
  ],
};

export default preview;
