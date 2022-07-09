import Button from './Button';

const Note = ({ note, onClickNoteDelete, onClickShowViewNote }) => {
  return (
    <div className="note" onClick={() => onClickShowViewNote(note.id)}>
      <p>{note.title}</p>
      <Button type='' text='Delete' onClick={() => onClickNoteDelete(note.id)} />
    </div>
  );
};

export default Note;
