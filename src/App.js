import { useState, useEffect } from 'react';
import Header from './components/Header';
import Notes from './components/Notes';
import Todos from './components/Todos';
import AddNote from './components/AddNote';
import AddTodo from './components/AddTodo';

function App() {
  const [showNotes, setShowNotes] = useState(false);
  const [showTodos, setShowTodos] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
    setShowNotes(true);
    setShowTodos(false);
    setShowAddNote(false);
    setShowAddTodo(false);
  }, []);

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
      {showNotes && <Notes onClickShowAddNote={onClickShowAddNote} />}
      {showTodos && <Todos onClickShowAddTodo={onClickShowAddTodo} />}
      {showAddNote && <AddNote onClickAddNoteCancel={onClickAddNoteCancel} />}
      {showAddTodo && <AddTodo onClickAddTodoCancel={onClickAddTodoCancel} />}
    </div>
  );
}

export default App;
