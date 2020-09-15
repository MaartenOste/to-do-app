import React, { useContext } from 'react';
import { TodoContext } from '../context';

import './Header.css';

const Header = ({}) => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="navigation">
            <h1 className="navigation__title">Todo App</h1>
            <p>You have {todos.length} todos.</p>
        </div>
    );
};

export default Header;