import { FaBackspace, FaEdit } from 'react-icons/fa';

const ViewNote = ({ noteData, onClickViewNoteBack, onClickShowEditNote }) => {
  return (
    <main>
      <div className="note-view-controls">
        <FaBackspace className="btn-sqr" onClick={onClickViewNoteBack} />
        <FaEdit className="btn-sqr" onClick={() => onClickShowEditNote(noteData.id)} />
      </div>
      <h2 className="note-view-title">{noteData.title}</h2>
      <p className="note-view-date">{noteData.date}</p>
      <p>{noteData.content}</p>
    </main>
  );
};

export default ViewNote;
