import type { Meta, StoryObj } from '@storybook/react';
import { Task } from './Task';
import { action } from '@storybook/addon-actions'
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'TODOLISTS/Task',
  component: Task,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    changeTaskStatus: {
      description: 'changeTaskStatus',
      action: 'clicked'
    },
    changeTaskTitle: {
      description: 'changeTaskTitle',
      action: 'clicked'
    },
    removeTask: {
      description: 'removeTask',
      action: 'clicked'
    }
  },
}

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TaskIsDoneStory: Story = {
  args: {
    task: { id: 'asdfasdf', title: 'HTML', isDone: false },
    todolistId: 'asdfasdfasddfgsdfgsdfg'
  }
}

export const TaskIsNotDoneStory: Story = {
  args: {
    task: { id: 'asdffasdfa', title: 'CSS', isDone: false },
    todolistId: 'asdfasdfasddfgsdfgsdfg'
  }
}

const TaskToggle = () => {
  const [task, setTask] = useState({ id: 'asdffasdfa', title: 'CSS', isDone: false })
  return <Task
    changeTaskStatus={() => setTask({ ...task, isDone: !task.isDone })}
    changeTaskTitle={(taskId, title) => setTask({ ...task, title: title })}
    removeTask={action('Task removed')}
    task={task}
    todolistId={'asdfjafjflkgsdlk'}
  />
}

export const TaskToggleStory: Story = {
  render: () => <TaskToggle />
}