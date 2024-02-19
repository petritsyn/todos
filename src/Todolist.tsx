import React, { ChangeEvent } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import { Button, Checkbox, Grid, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export function Todolist(props: PropsType) {
    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    return <Grid item>
        <Paper style={{ padding: '10px' }}>
            <h3> <EditableSpan value={props.title} onChange={changeTodolistTitle} />
                <IconButton onClick={removeTodolist}>
                    <DeleteIcon />
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask} />
            <div>
                {
                    props.tasks.map(t => {
                        const onClickHandler = () => props.removeTask(t.id, props.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked;
                            props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                        }
                        const onTitleChangeHandler = (newValue: string) => {
                            props.changeTaskTitle(t.id, newValue, props.id);
                        }


                        return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox onChange={onChangeHandler} checked={t.isDone} color='primary' />
                            <EditableSpan value={t.title} onChange={onTitleChangeHandler} />
                            <IconButton onClick={onClickHandler}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    })
                }
            </div>
            <div>
                <Button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler} color='inherit' variant={props.filter === 'all' ? "outlined" : "text"}>All
                </Button>
                <Button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler} color='primary' variant={props.filter === 'active' ? "outlined" : "text"}>Active
                </Button>
                <Button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler} color='secondary' variant={props.filter === 'completed' ? "outlined" : "text"}>Completed
                </Button>
            </div>
        </Paper>
    </Grid>
}


