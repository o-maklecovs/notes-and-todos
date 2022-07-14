import { useState } from 'react';
import Button from './Button';

const EditTodo = ({ todoData, onClickTodoSave, onClickTodoCancel }) => {
  const [task, setTask] = useState(todoData.task);

  return (
    <main>
      <div className="todo-form">
        <label htmlFor="content">Task</label>
        <input type="text" name="task" value={task} onChange={e => setTask(e.target.value)} />
        <div className="todo-form-controls">
          <Button type='btn-rect' text='Save' onClick={() => onClickTodoSave(todoData.id, task, Date.now(), todoData.isChecked)} />
          <Button type='btn-rect' text='Cancel' onClick={onClickTodoCancel} />
        </div>
      </div>
    </main>
  );
};

export default EditTodo;
