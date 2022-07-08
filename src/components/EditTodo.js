import { useState } from 'react';
import Button from './Button';

const EditTodo = ({ todoData, onClickTodoSave, onClickTodoCancel }) => {
  const [task, setTask] = useState(todoData.task);

  return (
    <main>
      <label htmlFor="content">Task</label>
      <input type="text" name="task" value={task} onChange={e => setTask(e.target.value)} />
      <Button type='' text='Save' onClick={() => onClickTodoSave(todoData.id, task, Date.now(), todoData.isChecked)} />
      <Button type='' text='Cancel' onClick={onClickTodoCancel} />
    </main>
  );
};

export default EditTodo;
