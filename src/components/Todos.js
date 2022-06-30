import Button from './Button';

const Todos = ({ onClickShowAddTodo }) => {
  return (
    <main>
      <Button type='' text='Add' onClick={onClickShowAddTodo} />
      <p>To-dos</p>
    </main>
  );
};

export default Todos;
