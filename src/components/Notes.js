import Note from './Note';
import Button from './Button';

const Notes = ({ notes, onClickShowAddNote, onClickNoteDelete, onClickShowViewNote }) => {
  return (
    <main>
      <Button type='' text='Add' onClick={onClickShowAddNote} />
      <div className="notes">
        {notes.length > 0 ? notes.map(note => <Note key={note.id} note={note} onClickNoteDelete={onClickNoteDelete} onClickShowViewNote={onClickShowViewNote} />) : <p className='empty'>Empty</p>}
      </div>
    </main>
  );
};

export default Notes;
