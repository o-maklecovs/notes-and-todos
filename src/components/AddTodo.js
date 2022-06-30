import Button from './Button';

const AddTodo = ({ onClickAddTodoCancel }) => {
  return (
    <main>
      <label htmlFor="content">Task</label>
      <input type="text" name="content" />
      <Button type='' text='Save' />
      <Button type='' text='Cancel' onClick={onClickAddTodoCancel} />
    </main>
  );
};

export default AddTodo;
