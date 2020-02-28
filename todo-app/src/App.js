import React from 'react';

import TodoCreate from './components/TodoCreate.js';
import TodoFilter from './components/TodoFilter.js';
import TodoList from './components/TodoList.js';

const App = () => {
  const style = {
    width: 500,
    height: '100vh',
    backgroundColor: 'whitesmoke',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  return (
    <div className="App" style={style}>
      <TodoCreate />
      <TodoFilter />
      <TodoList />
    </div>
  )
};

export default App;
