import Button from './Button';

const Note = ({ note, onClickNoteDelete, onClickShowViewNote }) => {
  return (
    <div className="note">
      <p onClick={() => onClickShowViewNote(note.id)}>{note.title}</p>
      <Button type='' text='Delete' onClick={() => onClickNoteDelete(note.id)} />
    </div>
  );
};

export default Note;
