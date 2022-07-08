import { useState } from 'react';
import Button from './Button';

const AddNote = ({ onClickNoteSave, onClickNoteCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <main>
      <label htmlFor='title'>Title</label>
      <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
      <label htmlFor="content">Text</label>
      <textarea name="content" cols="30" rows="10" onChange={e => setContent(e.target.value)}></textarea>
      <Button type='' text='Save' onClick={() => onClickNoteSave(title, content, Date.now())} />
      <Button type='' text='Cancel' onClick={onClickNoteCancel} />
    </main>
  );
};

export default AddNote;
