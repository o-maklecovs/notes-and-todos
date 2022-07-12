import { useState } from 'react';
import Button from './Button';

const EditNote = ({ noteData, onClickNoteSave, onClickNoteCancel }) => {
  const [title, setTitle] = useState(noteData.title);
  const [content, setContent] = useState(noteData.content);

  return (
    <main>
      <div className="note-form">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
        <label htmlFor="content">Text</label>
        <textarea name="content" cols="30" rows="10" value={content} onChange={e => setContent(e.target.value)}></textarea>
        <div className="note-form-controls">
          <Button type='btn-rect' text='Save' onClick={() => onClickNoteSave(noteData.id, title, content, Date.now())} />
          <Button type='btn-rect' text='Cancel' onClick={() => onClickNoteCancel(noteData)} />
        </div>
      </div>
    </main>
  );
};

export default EditNote;
