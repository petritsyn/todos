import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterTasks) => void
}

export type FilterTasks = 'all' | 'active' | 'completed'

export function Todolist(props: PropsType) {

    const onClickHandler = (taskId: number) => {
        props.removeTask(taskId)
    }
    const onClickFilterButton = (filter: FilterTasks) => {
        props.changeFilter(filter)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks.map(task => <li key={task.id}><input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span><button onClick={() => onClickHandler(task.id)}>✖️</button></li>)
            }
        </ul>
        <div>
            <button onClick={() => onClickFilterButton('all')}>All</button>
            <button onClick={() => onClickFilterButton('active')}>Active</button>
            <button onClick={() => onClickFilterButton('completed')}>Completed</button>
        </div>
    </div>
}
