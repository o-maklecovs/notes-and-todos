import Button from './Button';

const ViewNote = ({ noteData, onClickViewNoteBack, onClickShowEditNote }) => {
  return (
    <main>
      <Button type='' text='Back' onClick={onClickViewNoteBack} />
      <Button type='' text='Edit' onClick={() => onClickShowEditNote(noteData.id)} />
      <h2>{noteData.title}</h2>
      <p>{noteData.date}</p>
      <p>{noteData.content}</p>
    </main>
  );
};

export default ViewNote;
