import type { Meta, StoryObj } from '@storybook/react';
import AppWithRedux from './AppWithRedux';
import { ReduxStoreProviderDecorator } from './stories/decorators/ReduxStoreProviderDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'TODOLISTS/AppWithRedux',
  component: AppWithRedux,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
}

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const AppWithReduxStory: Story = {
  args: {}
}