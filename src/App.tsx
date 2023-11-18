import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist/Todolist";

export const App = () => {

    const tasks_1: Array<TaskType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: true},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 4, title: 'Bear', isDone: true},
        {id: 5, title: 'Fish', isDone: true},
        {id: 6, title: 'Cheeps', isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title={'React'} tasks={tasks_1}/>
            <Todolist title={'Redux'} tasks={tasks_2}/>
        </div>
    );
}
