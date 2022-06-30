import Button from './Button';

const Header = ({ isBtnDisabled, onClickNotes, onClickTodos }) => {
  return (
    <header>
      <h1>Notes & to-dos</h1>
      <div className="tabs">
        <Button type={isBtnDisabled ? 'disabled' : ''} text='Notes' onClick={onClickNotes} />
        <Button type={isBtnDisabled ? 'disabled' : ''} text='To-dos' onClick={onClickTodos} />
      </div>
    </header>
  );
};

export default Header;
