import React, { useContext } from 'react';
import classnames from 'classnames';

import { TodoContext } from '../context';

import './TodoListItem.css';

const TodoListItem = ({todo}) => {
    const { removeTodo, completeTodo } = useContext(TodoContext);

    return (
        <li className={classnames("todo-list__item", (todo.completed) ? 'todo-list__item--complete': '')}>
            <h1>{todo.title}</h1>
            <span className="btn-complete" onClick={ev=> completeTodo(todo.id, !todo.completed)}>C</span>
            <span className="btn-remove" onClick={ev => removeTodo(todo.id)}>R</span>
        </li>
    );
};

export default TodoListItem;