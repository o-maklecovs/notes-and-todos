import { useState } from 'react';
import Button from './Button';

const AddTodo = ({ onClickTodoAdd, onClickTodoAddCancel }) => {
  const [task, setTask] = useState('');

  return (
    <main>
      <label htmlFor="content">Task</label>
      <input type="text" name="task" onChange={e => setTask(e.target.value)} />
      <Button type='' text='Save' onClick={() => onClickTodoAdd(task, Date.now(), false)} />
      <Button type='' text='Cancel' onClick={onClickTodoAddCancel} />
    </main>
  );
};

export default AddTodo;
