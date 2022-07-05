import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import Notes from './components/Notes';
import Todos from './components/Todos';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import AddTodo from './components/AddTodo';

function App() {
  const [showNotes, setShowNotes] = useState(true);
  const [showTodos, setShowTodos] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showEditNote, setShowEditNote] = useState({ isVisible: false, noteData: {} });
  const [showAddTodo, setShowAddTodo] = useState(false);

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  
  const onClickNotes = () => {
    setShowNotes(true);
    setShowTodos(false);
  };
  const onClickShowAddNote = () => {
    setShowAddNote(true);
    setShowNotes(false);
  };
  const onClickShowEditNote = id => {
    const notesStorage = JSON.parse(localStorage.getItem('notes'));
    const noteData = notesStorage.filter(note => note.id === id);
    setShowEditNote({ isVisible: true, noteData: noteData[0] });
    setShowNotes(false);
  };
  const onClickNoteAdd = (title, content, date) => {
    const newNote = {
      id: uuid(),
      title: title,
      content: content,
      date: date
    };
    setNotes([...notes, newNote]);
    onClickNoteAddCancel();
  };
  const onClickNoteEdit = (id, title, content, date) => {
    const updatedNotes = notes;
    updatedNotes.forEach(note => {
      if (note.id === id) {
        note.title = title;
        note.content = content;
        note.date = date;
      }
    });
    setNotes([...updatedNotes]);
    onClickNoteEditCancel();
  };
  const onClickNoteAddCancel = () => {
    setShowAddNote(false);
    setShowNotes(true);
  };
  const onClickNoteEditCancel = () => {
    setShowEditNote({ isVisible: false, noteData: {} });
    setShowNotes(true);
  };

  const onClickTodos = () => {
    setShowTodos(true);
    setShowNotes(false);
  };
  const onClickShowAddTodo = () => {
    setShowAddTodo(true);
    setShowTodos(false);
  };
  const onClickAddTodoCancel = () => {
    setShowAddTodo(false);
    setShowTodos(true);
  };

  return (
    <div className="container">
      <Header isBtnDisabled={showAddNote || showEditNote.isVisible || showAddTodo ? true : false} onClickNotes={onClickNotes} onClickTodos={onClickTodos} />
      {showNotes && <Notes notes={notes} onClickShowAddNote={onClickShowAddNote} onClickShowEditNote={onClickShowEditNote} />}
      {showTodos && <Todos onClickShowAddTodo={onClickShowAddTodo} />}
      {showAddNote && <AddNote onClickNoteSave={onClickNoteAdd} onClickNoteCancel={onClickNoteAddCancel} />}
      {showEditNote.isVisible && <EditNote noteData={showEditNote.noteData} onClickNoteSave={onClickNoteEdit} onClickNoteCancel={onClickNoteEditCancel} />}
      {showAddTodo && <AddTodo onClickAddTodoCancel={onClickAddTodoCancel} />}
    </div>
  );
}

export default App;
