import Button from './Button';

const Header = ({ onClickNotes, onClickTodos }) => {
  return (
    <header>
      <h1>Notes & to-dos</h1>
      <div className="tabs">
        <Button type='' text='Notes' onClick={onClickNotes} />
        <Button type='' text='To-dos' onClick={onClickTodos} />
      </div>
    </header>
  );
};

export default Header;
