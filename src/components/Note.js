import { FaTimes } from 'react-icons/fa';

const Note = ({ note, onClickNoteDelete, onClickShowViewNote }) => {

  return (
    <div className="note">
      <div className="note-data" onClick={() => onClickShowViewNote(note.id)}>
        <p>{note.title}</p>
        <p className="notes-list-date">{note.date}</p>
      </div>
      <div>
        <FaTimes className='btn-del del-wrap' onClick={() => onClickNoteDelete(note.id)} />
      </div>
    </div>
  );
};

export default Note;
