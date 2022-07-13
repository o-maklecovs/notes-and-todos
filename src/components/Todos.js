import Button from './Button';
import { FaPlus } from 'react-icons/fa';
import Todo from './Todo';

const Todos = ({ todos, onClickShowAddTodo, onClickShowEditTodo, onClickTodoCheck, onClickTodoDelete }) => {
  return (
    <main>
      <FaPlus className="btn-sqr" onClick={onClickShowAddTodo} />
      <div className="todos">
        {todos.length > 0 ? todos.map(todo => <Todo key={todo.id} todo={todo} onClickShowEditTodo={onClickShowEditTodo} onClickTodoCheck={onClickTodoCheck} onClickTodoDelete={onClickTodoDelete} />) : <p className="empty">Empty</p>}
      </div>
    </main>
  );
};

export default Todos;
