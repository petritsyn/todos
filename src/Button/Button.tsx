import React, {FC} from 'react';

type PropsType = {
    name: string
}

export const Button: FC<PropsType> = ({name}) => {

    const onButtonClick = () => {
        console.log('Button ' + name + ' pushed')
    }

    return (
        <button onClick={onButtonClick}>{name}</button>
    );
};