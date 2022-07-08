import Button from './Button';

const Todo = ({ todo, onClickTodoEdit, onClickTodoDelete }) => {
  return (
    <div className="todo">
      <p>{todo.task}</p>
      <Button type='' text='Edit' />
      <Button type='' text='Delete' />
    </div>
  );
};

export default Todo;
