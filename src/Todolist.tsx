import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, taskStatus: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState(false)

    const addTask = () => {
        if (!title.trim()) setError(true)
        props.addTask(title.trim());
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
                   className={error ? 'inputError' : ''}
            />
            {error && <div className={error ? 'error' : ''}>Title is required!</div>}
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const onClickCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.target.checked)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={onClickCheckboxHandler}/>
                        <span className={t.isDone ? 'isDone' : ''}>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={ onAllClickHandler } className={props.filter === 'all' ? 'active-filter' : ''}>All</button>
            <button onClick={ onActiveClickHandler } className={props.filter === 'active' ? 'active-filter' : ''}>Active</button>
            <button onClick={ onCompletedClickHandler } className={props.filter === 'completed' ? 'active-filter' : ''}>Completed</button>
        </div>
    </div>
}
