import Button from './Button';
import Todo from './Todo';

const Todos = ({ todos, onClickShowAddTodo, onClickShowEditTodo, onClickTodoDelete }) => {
  return (
    <main>
      <Button type='' text='Add' onClick={onClickShowAddTodo} />
      <div className="todos">
        {todos.length > 0 ? todos.map(todo => <Todo key={todo.id} todo={todo} onClickShowEditTodo={onClickShowEditTodo} onClickTodoDelete={onClickTodoDelete} />) : <p className="empty">Empty</p>}
      </div>
    </main>
  );
};

export default Todos;
