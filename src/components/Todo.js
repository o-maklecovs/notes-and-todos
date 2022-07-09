import Button from './Button';

const Todo = ({ todo, onClickShowEditTodo, onClickTodoCheck, onClickTodoDelete }) => {
  return (
    <div className="todo">
      <input type="checkbox" name="isChecked" checked={todo.isChecked} onChange={e => onClickTodoCheck(todo.id, e.target.checked)} />
      <label htmlFor="isChecked">{todo.task}</label>
      <Button type='' text='Edit' onClick={() => onClickShowEditTodo(todo.id)} />
      <Button type='' text='Delete' onClick={() => onClickTodoDelete(todo.id)} />
    </div>
  );
};

export default Todo;
