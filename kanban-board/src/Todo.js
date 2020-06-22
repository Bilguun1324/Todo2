import React, { useState, useContext } from 'react';
import { TodoContext } from './provider/prover';
import './main.scss';


const AddTodo = () => {
    let { addTodo } = useContext(TodoContext);
    const [name, setName] = useState('');

    return (<div className="Pages">
        <h1>Todo</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input value={name} onChange={({target}) => setName(target.value)}/>
            <button onClick = {() => {
                addTodo(name)
            }}> add todo </button>
        </div>
    </div>)
}

export default AddTodo;