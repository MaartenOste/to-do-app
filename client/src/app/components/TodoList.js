import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { TodoContext } from '../context';

import './TodoList.css';

const TodoList = ({}) => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="todo-list">
            <ul>
                {
                    todos.map((todo) => {
                        return <TodoListItem todo={todo} key={todo.id} />
                    })
                }                
            </ul>
        </div>
    );
};

export default TodoList;