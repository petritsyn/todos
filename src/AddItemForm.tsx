import { ChangeEvent, KeyboardEvent, useState, FC } from "react"

type PropsType = {
    callBack: (title: string) => void
}

export const AddItemForm: FC<PropsType> = ({ callBack }) => {

    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    const addItem = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            callBack(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    return <>
        {error && <div className="error-message">{error}</div>}
        <input type="text"
            onChange={onChangeHandler}
            value={title}
            onKeyPress={onKeyPressHandler} />
        <button onClick={addItem}>+</button>
    </>
}