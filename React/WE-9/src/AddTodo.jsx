import React from 'react'
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './reducers/todoSlice';

const AddTodo = () => {

    const [inputTask, setInputTask] = React.useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        if (inputTask == "") return;
        dispatch(addTodo({ text: inputTask }));
        setInputTask("");
    }
    return (
        <div>
            <input value={inputTask} type="text" placeholder='add todo' onChange={(e) => setInputTask(e.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddTodo