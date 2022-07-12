import Button from './Button';

const Header = ({ isBtnDisabled, onClickNotes, onClickTodos, isNotesActive, isTodosActive }) => {
  return (
    <header>
      <h1>Notes & to-dos</h1>
      <div className="tabs">
        {!isBtnDisabled && <Button type={isNotesActive ? 'selected' : ''} text='Notes' onClick={onClickNotes} />}
        {!isBtnDisabled && <Button type={isTodosActive ? 'selected' : ''} text='To-dos' onClick={onClickTodos} />}
      </div>
    </header>
  );
};

export default Header;
