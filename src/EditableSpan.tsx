import { FC, useState, ChangeEvent } from 'react'

type PropsType = {
    value: string
    callBack: (newTitle: string) => void
}

export const EditableSpan: FC<PropsType> = ({ value, callBack }) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const editModeOn = () => {
        setEditMode(true)
    }
    const editModeOff = () => {
        setEditMode(false)
        callBack(title)
    }

    {
        return editMode
            ? <input value={title} onChange={onChangeHandler} onBlur={editModeOff} autoFocus></input>
            : <span onDoubleClick={editModeOn}>{value}</span>
    }
}