import Button from './Button';

const Note = ({ note, onClickShowEditNote, onClickNoteDelete }) => {
  return (
    <div className="note">
      <p>{note.title}</p>
      <Button type='' text='Edit' onClick={() => onClickShowEditNote(note.id)} />
      <Button type='' text='Delete' onClick={() => onClickNoteDelete(note.id)} />
    </div>
  );
};

export default Note;
