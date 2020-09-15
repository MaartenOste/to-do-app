import React from 'react';

import { Header, TodoForm, TodoList } from './components';
import { TodoContextProvider } from './context';

import './App.css';


function App() {
  return (
    <div className="app">
      <div className="app__container">
        <TodoContextProvider>
          <Header />
          <main className="app__main">
            <TodoForm />
            <TodoList />
          </main>
        </TodoContextProvider>
      </div>
    </div>
  );
}

export default App;
