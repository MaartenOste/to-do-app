import React, { useContext, useState } from 'react';
import { TodoContext } from '../context';

import './TodoForm.css';

const TodoForm = ({}) => {
    const [ title, setTitle ] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addTodo(title);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" required placeholder="write your todo..." onChange={(ev) => setTitle(ev.target.value)} value={title} />
            <input type="submit" value="Add todo" />
        </form>
    );
};

export default TodoForm;