import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import Notes from './components/Notes';
import Todos from './components/Todos';
import AddNote from './components/AddNote';
import AddTodo from './components/AddTodo';

function App() {
  const [showNotes, setShowNotes] = useState(true);
  const [showTodos, setShowTodos] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showAddTodo, setShowAddTodo] = useState(false);

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onClickTodos = () => {
    setShowTodos(true);
    setShowNotes(false);
  };

  const onClickNotes = () => {
    setShowNotes(true);
    setShowTodos(false);
  };

  const onClickShowAddNote = () => {
    setShowAddNote(true);
    setShowNotes(false);
  };

  const onClickAddNoteCancel = () => {
    setShowAddNote(false);
    setShowNotes(true);
  };

  const onClickAddNoteSave = (title, content, date) => {
    const newNote = {
      id: uuid(),
      title: title,
      content: content,
      date: date
    };
    setNotes([...notes, newNote]);
    onClickAddNoteCancel();
  }

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
      <Header isBtnDisabled={showAddNote || showAddTodo ? true : false} onClickNotes={onClickNotes} onClickTodos={onClickTodos} />
      {showNotes && <Notes notes={notes} onClickShowAddNote={onClickShowAddNote} />}
      {showTodos && <Todos onClickShowAddTodo={onClickShowAddTodo} />}
      {showAddNote && <AddNote onClickAddNoteSave={onClickAddNoteSave} onClickAddNoteCancel={onClickAddNoteCancel} />}
      {showAddTodo && <AddTodo onClickAddTodoCancel={onClickAddTodoCancel} />}
    </div>
  );
}

export default App;
