import Button from './Button';

const Note = ({ note, onClickShowEditNote }) => {
  return (
    <div className="note">
      <p>{note.title}</p>
      <Button type='' text='Edit' onClick={() => onClickShowEditNote(note.id)} />
    </div>
  );
};

export default Note;
