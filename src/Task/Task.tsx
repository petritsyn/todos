import React, {FC} from 'react';

type PropsType = {
    isDone: boolean
    title: string
}

export const Task: FC<PropsType> = ({isDone, title}) => {
    return (
        <div>
            <input type={'checkbox'} checked={isDone}/><span>{title}</span>
        </div>
    );
};