import React from 'react';

const TodoFilter = ({hook, filter}) => {
  const styles = {
    filter: {
      width: '100%',
      height: '25px',
      backgroundColor: 'whitesmoke',
      display: 'grid',
      gridTemplateColumns: '2fr 4fr',
      textAlign: 'center'
    },
    select: {
      cursor: 'pointer'
    }
  }

  const handleChange = (e) => {
      switch (e.target.value) {
        case 'all':
          hook(e.target.value)
          break;
        case 'done':
          hook(e.target.value)
          break;
        case 'undone':
          hook(e.target.value)
          break;
        default:
          break;
      }
  }

  return (
    <form style={styles.filter}>
      <div>show by : </div>
      <select value={filter} onChange={handleChange}>
        <option value='all'>all</option>
        <option value='done'>completed</option>
        <option value='undone'>uncompleted</option>
      </select>
    </form>
  )
};

export default TodoFilter;
