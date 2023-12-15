import React, {useState} from 'react';
import './App.css';
import {FilterTasks, TaskType, Todolist} from './Todolist';

function App() {

    const [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])
    const [filter, setFilter] = useState<FilterTasks>('all')

    let filteredTasks: TaskType[] = tasks
    if (filter === 'active') {
        filteredTasks = filteredTasks.filter(el => !el.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = filteredTasks.filter(el => el.isDone)
    }

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    const changeFilter = (filter: FilterTasks) => {
        setFilter(filter)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filteredTasks} removeTask={deleteTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
