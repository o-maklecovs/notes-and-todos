import Button from './Button';

const AddNote = ({ onClickAddNoteCancel }) => {
  return (
    <main>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" />
      <label htmlFor="content">Text</label>
      <input type="text" name="content" />
      <Button type='' text='Save' />
      <Button type='' text='Cancel' onClick={onClickAddNoteCancel} />
    </main>
  );
};

export default AddNote;
