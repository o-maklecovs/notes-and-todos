import Button from './Button';
import { FaTimes, FaEdit } from 'react-icons/fa';

const Todo = ({ todo, onClickShowEditTodo, onClickTodoCheck, onClickTodoDelete }) => {
  return (
    <div className="todo">
      <div>
        <input type="checkbox" name="isChecked" checked={todo.isChecked} onChange={e => onClickTodoCheck(todo.id, e.target.checked)} />
        <label htmlFor="isChecked" className={todo.isChecked ? 'checked' : ''}>{todo.task}</label>
      </div>
      <div>
        <FaEdit className="btn-edit" onClick={() => onClickShowEditTodo(todo.id)} />
        <FaTimes className="btn-del" onClick={() => onClickTodoDelete(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
