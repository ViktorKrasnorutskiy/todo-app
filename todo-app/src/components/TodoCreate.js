import React, {useState} from 'react';

const TodoCreate = ({hook, todos}) => {

  const styles = {
    form: {
      width: '100%',
      height: '50px',
      backgroundColor: 'whitesmoke',
      display: 'grid',
      gridTemplateColumns: '4fr 2fr'
    },
    add_btn: {
      backgroundColor: '',
      textAlign: 'center',
      cursor: 'pointer',
      transition: '.3s'
    }
  };

  const [form, setForm] = useState('');
  styles.add_btn.backgroundColor = form ? 'lightgreen' : 'orange';

  const handleChange = (e) => {
    setForm(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form) {
      hook({
        id: todos.length + 1,
        text: form,
        done: false
      })
      setForm('')
    } else {
      console.log('Todo cant be empty')
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input type='text' value={form} onChange={handleChange}/>
      <input style={styles.add_btn} type='submit' value='Add'/>
    </form>
  )
};

export default TodoCreate;
