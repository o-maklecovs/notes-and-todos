import { useState } from 'react';
import Button from './Button';

const AddTodo = ({ onClickTodoSave, onClickTodoCancel }) => {
  const [task, setTask] = useState('');

  return (
    <main>
      <label htmlFor="content">Task</label>
      <input type="text" name="task" onChange={e => setTask(e.target.value)} />
      <Button type='' text='Save' onClick={() => onClickTodoSave(task, Date.now(), false)} />
      <Button type='' text='Cancel' onClick={onClickTodoCancel} />
    </main>
  );
};

export default AddTodo;
