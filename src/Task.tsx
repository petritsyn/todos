import React, {ChangeEvent, useCallback} from 'react';
import {Checkbox, IconButton} from "@mui/material";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@mui/icons-material";

type TaskType = {
    taskId: string
    removeTask: (taskId: string, todolistId: string) => void
    todolistId: string
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    isDone: boolean
    title: string
}

export const Task = React.memo((props: TaskType) => {
    const onClickHandler = () => props.removeTask(props.taskId, props.todolistId)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(props.taskId, newIsDoneValue, props.todolistId);
    }
    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.taskId, newValue, props.todolistId);
    }, [props.taskId, props.todolistId])

    return <div className={props.isDone ? "is-done" : ""}>
        <Checkbox
            checked={props.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={props.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
});