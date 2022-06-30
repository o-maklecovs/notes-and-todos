import { useState } from 'react';
import Button from './Button';

const AddNote = ({ onClickAddNoteSave, onClickAddNoteCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <main>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
      <label htmlFor="content">Text</label>
      <input type="text" name="content" onChange={e => setContent(e.target.value)} />
      <Button type='' text='Save' onClick={() => onClickAddNoteSave(title, content, Date.now())} />
      <Button type='' text='Cancel' onClick={onClickAddNoteCancel} />
    </main>
  );
};

export default AddNote;
