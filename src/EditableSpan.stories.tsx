import type { Meta, StoryObj } from '@storybook/react';
import { EditableSpan } from './EditableSpan';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'TODOLISTS/EditableSpan',
  component: EditableSpan,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      description: 'Start value empty. Add value push button set string.'
    },
    onChange: {
      description: 'Value EditableSpan changed'
    }
  },
}

export default meta;
type Story = StoryObj<typeof EditableSpan>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const EditableSpanStory: Story = {
  args: {
    
  }
}