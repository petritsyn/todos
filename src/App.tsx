import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type FilterValuesType = "all" | "active" | "completed";

type TaskStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        { id: todolistId1, title: 'What to learn', filter: 'all' },
        { id: todolistId2, title: 'What to buy', filter: 'all' }
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistId1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],
        [todolistId2]: [
            { id: v1(), title: "Meat", isDone: false },
            { id: v1(), title: "Milk", isDone: false },
            { id: v1(), title: "Crisps", isDone: false },
        ]
    })

    function removeTask(todolistId: string, taskId: string) {
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(task => task.id !== taskId)
        setTasks({ ...tasks })
    }

    function addTask(todolistId: string, title: string) {
        let task = { id: v1(), title: title, isDone: false };
        setTasks({ ...tasks, [todolistId]: [task, ...tasks[todolistId]] })
    }

    function changeStatus(todolistId: string, taskId: string, isDone: boolean) {
        let task = tasks[todolistId].find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone
            setTasks({ ...tasks })
        }
    }

    function removeTodolist(todolistId: string) {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId]
    }

    return (
        <div className="App">
            {
                todolists.map(el => {

                    let tasksForTodolist = tasks[el.id];

                    if (el.filter === "active") {
                        tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                    }
                    if (el.filter === "completed") {
                        tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                    }

                    function changeFilter(value: FilterValuesType, todolistId: string) {
                        let todolist = todolists.find(t => t.id === todolistId)
                        if (todolist) {
                            todolist.filter = value
                            setTodolists([...todolists])
                        }
                    }

                    return <Todolist
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}
                        removeTodolist={removeTodolist}
                    />
                })
            }
        </div>
    );
}

export default App;
