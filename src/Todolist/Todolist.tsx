import React, {FC} from 'react';
import s from './Todolist.module.css'
import {Button} from "../Button/Button";
import {Task} from "../Task/Task";

type PropsType = {
    title: string
    tasks: TaskType[]
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist: FC<PropsType> = ({title, tasks}) => {
    return (
        <div className={s.todolist}>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button name={'+'}/>
            </div>
            <ul>
                {
                    tasks.map(el => <li key={el.id}><Task isDone={el.isDone} title={el.title}/></li>)
                }
            </ul>
            <div>
                <Button name={'All'}/>
                <Button name={'Active'}/>
                <Button name={'Completed'}/>
            </div>
        </div>
    );
};