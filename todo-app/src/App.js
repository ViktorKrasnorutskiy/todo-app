import React, {useState} from 'react';

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

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all')

  const addTodo = (todoForAdd) => {
    setTodos([...todos, todoForAdd])
  }
  const deleteTodo = (todoForDel) => {
    setTodos(todos.filter((todo) =>
      todo !== todoForDel
    ))
  }
  const toggleTodo = (todoForToggle) => {
    setTodos(todos.map((todo) =>
      todo === todoForToggle ? {
        id: todoForToggle.id,
        text: todoForToggle.text,
        done: !todoForToggle.done
      } : todo
    ))
  }


  return (
    <div className="App" style={style}>
      <TodoCreate hook={addTodo} todos={todos}/>
      <TodoFilter hook={setFilter} filter={filter}/>
      <TodoList hooks={{deleteTodo,toggleTodo}} todos={todos} filter={filter}/>
    </div>
  )
};

export default App;
