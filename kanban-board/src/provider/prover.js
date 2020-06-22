import React, { useState, createContext, useEffect } from 'react';

export const TodoContext = createContext({
    todo: [],
    addTodo: () => { },
    deleteTodo: () => { }
});

export const TodoProvider = ({ children }) => {
    const [id, setId] = useState(1);
    const [todo, setTodo] = useState([]);

    const addTodo = (name) => {
        setTodo([...todo, {id, name}]);
        setId((id) => id + 1);
    }

    const deleteTodo = (id) => {
        setTodo(todo.filter((item) => item.id !== id))
    }

    return (
        <TodoContext.Provider value={{todo, addTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}