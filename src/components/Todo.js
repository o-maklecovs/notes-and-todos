import Button from './Button';

const Todo = ({ todo, onClickShowEditTodo, onClickTodoDelete }) => {
  return (
    <div className="todo">
      <p>{todo.task}</p>
      <Button type='' text='Edit' onClick={() => onClickShowEditTodo(todo.id)} />
      <Button type='' text='Delete' onClick={() => onClickTodoDelete(todo.id)} />
    </div>
  );
};

export default Todo;
