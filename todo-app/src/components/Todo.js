import React from 'react';

const Todo = ({todo, hooks}) => {
  const styles = {
    todo: {
      width: '100%',
      height: '50px',
      display: 'grid',
      gridTemplateColumns: '1fr 4fr 1fr',
      textAlign: 'center',
      marginTop: '5px'
    },
    toggle:{
      transition: '.3s',
      backgroundColor: todo.done ? 'lightgreen' : 'orange',
      cursor: 'pointer'
    },
    text: {
      backgroundColor: 'lightgray'
    },
    delete: {
      backgroundColor: 'darkgray',
      cursor: 'pointer'
    }
  }

  const removeTodo = () => {
    hooks.deleteTodo(todo)
  }

  const checkTodo = () => {
    hooks.toggleTodo(todo)
  }

  return (
    <div style={styles.todo}>
      <div style={styles.toggle} onClick={checkTodo}> {todo.done ? 'done' : 'undone'} </div>
      <div style={styles.text}> {todo.text} </div>
      <div style={styles.delete} onClick={removeTodo}> x </div>
    </div>
  )
};

export default Todo;
