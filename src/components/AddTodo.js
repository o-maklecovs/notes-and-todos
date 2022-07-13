import { useState } from 'react';
import Button from './Button';

const AddTodo = ({ onClickTodoSave, onClickTodoCancel }) => {
  const [task, setTask] = useState('');

  return (
    <main>
      <div className="todo-form">
        <label htmlFor="content">Task</label>
        <input type="text" name="task" onChange={e => setTask(e.target.value)} />
        <div className="todo-form-controls">
          <Button type='btn-rect' text='Save' onClick={() => onClickTodoSave(task, Date.now(), false)} />
          <Button type='btn-rect' text='Cancel' onClick={onClickTodoCancel} />
        </div>
      </div>
    </main>
  );
};

export default AddTodo;
