import React from 'react';
import Todo from './Todo.js';

const TodoList = ({todos, hooks, filter}) => {

  const filteredTodos = todos.filter((todo) => {
    switch(filter) {
      case 'all':
        return todo
        break;
      case 'done':
        return todo.done
        break;
      case 'undone':
        return !todo.done
        break;
    }
  })

  return (
    <div>
      {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} hooks={hooks}/>
      ))}
    </div>
  )
};

export default TodoList;
