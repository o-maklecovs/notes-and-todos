import Button from './Button';

const Notes = ({ onClickShowAddNote }) => {
  return (
    <main>
      <Button type='' text='Add' onClick={onClickShowAddNote} />
      <p>Notes</p>
    </main>
  );
};

export default Notes;
