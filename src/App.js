import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import Notes from './components/Notes';
import Todos from './components/Todos';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';

function App() {
  const [showNotes, setShowNotes] = useState(true);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showEditNote, setShowEditNote] = useState({ isVisible: false, noteData: {} });
  const [showTodos, setShowTodos] = useState(false);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [showEditTodo, setShowEditTodo] = useState({ isVisible: false, todoData: {} });

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
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
  const onClickNoteDelete = id => {
    const updatedNotes = notes.filter(note => note.id != id);
    setNotes([...updatedNotes]);
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
  const onClickTodoAdd = (task, date, isChecked) => {
    const newTodo = {
      id: uuid(),
      task: task,
      date: date,
      isChecked: isChecked
    };
    setTodos([...todos, newTodo]);
    onClickTodoAddCancel();
  };
  const onClickTodoAddCancel = () => {
    setShowAddTodo(false);
    setShowTodos(true);
  };
  const onClickShowEditTodo = id => {
    const todosStorage = JSON.parse(localStorage.getItem('todos'));
    const todoData = todosStorage.filter(todo => todo.id === id);
    setShowEditTodo({ isVisible: true, todoData: todoData[0] });
    setShowTodos(false);
  };
  const onClickTodoEdit = (id, task, date, checked) => {
    const updatedTodos = todos;
    updatedTodos.forEach(todo => {
      if (todo.id === id) {
        todo.task = task;
        todo.date = date;
        todo.checked = checked;
      }
    });
    setTodos([...updatedTodos]);
    onClickTodoEditCancel();
  };
  const onClickTodoEditCancel = () => {
    setShowEditTodo({ isVisible: false, todoData: {} });
    setShowTodos(true);
  }
  const onClickTodoDelete = id => {
    const updatedTodos = todos.filter(todo => todo.id != id);
    setTodos([...updatedTodos]);
  };

  return (
    <div className="container">
      <Header isBtnDisabled={showAddNote || showEditNote.isVisible || showAddTodo ? true : false} onClickNotes={onClickNotes} onClickTodos={onClickTodos} />
      {showNotes && <Notes notes={notes} onClickShowAddNote={onClickShowAddNote} onClickShowEditNote={onClickShowEditNote} onClickNoteDelete={onClickNoteDelete} />}
      {showTodos && <Todos todos={todos} onClickShowAddTodo={onClickShowAddTodo} onClickShowEditTodo={onClickShowEditTodo} onClickTodoDelete={onClickTodoDelete} />}
      {showAddNote && <AddNote onClickNoteSave={onClickNoteAdd} onClickNoteCancel={onClickNoteAddCancel} />}
      {showEditNote.isVisible && <EditNote noteData={showEditNote.noteData} onClickNoteSave={onClickNoteEdit} onClickNoteCancel={onClickNoteEditCancel} />}
      {showAddTodo && <AddTodo onClickTodoSave={onClickTodoAdd} onClickTodoCancel={onClickTodoAddCancel} />}
      {showEditTodo.isVisible && <EditTodo todoData={showEditTodo.todoData} onClickTodoSave={onClickTodoEdit} onClickTodoCancel={onClickTodoEditCancel} />}
    </div>
  );
}

export default App;
