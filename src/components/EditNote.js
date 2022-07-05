import { useState } from 'react';
import Button from './Button';

const EditNote = ({ noteData, onClickNoteSave, onClickNoteCancel }) => {
  const [title, setTitle] = useState(noteData.title);
  const [content, setContent] = useState(noteData.content);

  return (
    <main>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
      <label htmlFor="content">Text</label>
      <textarea name="content" cols="30" rows="10" value={content} onChange={e => setContent(e.target.value)}></textarea>
      <Button type='' text='Save' onClick={() => onClickNoteSave(noteData.id, title, content, Date.now())} />
      <Button type='' text='Cancel' onClick={onClickNoteCancel} />
    </main>
  );
};

export default EditNote;
