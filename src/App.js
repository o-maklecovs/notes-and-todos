import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import Notes from './components/Notes';
import Todos from './components/Todos';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import ViewNote from './components/ViewNote';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import Error from './components/Error';

function App() {
  const [showNotes, setShowNotes] = useState(true);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showEditNote, setShowEditNote] = useState({ isVisible: false, noteData: {} });
  const [showViewNote, setShowViewNote] = useState({ isVisible: false, noteData: {} });
  const [showTodos, setShowTodos] = useState(false);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [showEditTodo, setShowEditTodo] = useState({ isVisible: false, todoData: {} });
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isNotesActive, setIsNotesActive] = useState(true);
  const [isTodosActive, setIsTodosActive] = useState(false);
  const [error, setError] = useState({ isError: false, errorMsg: '' });

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    if (showAddNote || showEditNote.isVisible || showViewNote.isVisible || showAddTodo || showEditTodo.isVisible)
      setIsBtnDisabled(true);
    else
      setIsBtnDisabled(false);
  }, [showAddNote, showEditNote, showViewNote, showAddTodo, showEditTodo]);
  
  const onClickNotes = () => {
    setShowNotes(true);
    setShowTodos(false);
    setIsNotesActive(true);
    setIsTodosActive(false);
  };
  const onClickShowAddNote = () => {
    setShowAddNote(true);
    setShowNotes(false);
  };
  const onClickShowEditNote = id => {
    const notesStorage = JSON.parse(localStorage.getItem('notes'));
    const noteData = notesStorage.filter(note => note.id === id);
    setShowEditNote({ isVisible: true, noteData: noteData[0] });
    setShowViewNote({ isVisible: false, noteData: {} });
  };
  const onClickNoteAdd = (title, content, date) => {
    if (title && content) {
      const rawDate = new Date(date);
      const newNote = {
        id: uuid(),
        title: title,
        content: content,
        date: rawDate.toLocaleString()
      };
      setNotes([...notes, newNote]);
      onClickNoteAddCancel();
    } else {
      setError({ isError: true, errorMsg: 'Please fill out all the fields' });
    }
  };
  const onClickNoteEdit = (id, title, content, date) => {
    if (title && content) {
      const rawDate = new Date(date);
      const updatedNotes = notes;
      updatedNotes.forEach(note => {
        if (note.id === id) {
          note.title = title;
          note.content = content;
          note.date = rawDate.toLocaleString();
        }
      });
      setNotes([...updatedNotes]);
      onClickNoteEditCancel({ id: id, title: title, content: content, date: date });
    } else {
      setError({ isError: true, errorMsg: 'Please fill out all the fields' });
    }
  };
  const onClickNoteDelete = id => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes([...updatedNotes]);
  };
  const onClickNoteAddCancel = () => {
    setShowAddNote(false);
    setShowNotes(true);
  };
  const onClickNoteEditCancel = noteData => {
    setShowEditNote({ isVisible: false, noteData: {} });
    setShowViewNote({ isVisible: true, noteData: noteData});
  };
  const onClickShowViewNote = id => {
    const selectedNote = notes.filter(note => note.id === id);
    setShowViewNote({ isVisible: true, noteData: selectedNote[0] });
    setShowNotes(false);
  }
  const onClickViewNoteBack = () => {
    setShowViewNote({ isVisible: false, noteData: {} });
    setShowNotes(true);
  }

  const onClickTodos = () => {
    setShowTodos(true);
    setShowNotes(false);
    setIsTodosActive(true);
    setIsNotesActive(false);
  };
  const onClickShowAddTodo = () => {
    setShowAddTodo(true);
    setShowTodos(false);
  };
  const onClickTodoAdd = (task, date, isChecked) => {
    if (task) {
      const rawDate = new Date(date);
      const newTodo = {
        id: uuid(),
        task: task,
        date: rawDate.toLocaleString(),
        isChecked: isChecked
      };
      setTodos([...todos, newTodo]);
      onClickTodoAddCancel();
    } else {
      setError({ isError: true, errorMsg: 'Please fill out all the fields' });
    }
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
  const onClickTodoEdit = (id, task, date, isChecked) => {
    if (task) {
      const rawDate = new Date(date);
      const updatedTodos = todos;
      updatedTodos.forEach(todo => {
        if (todo.id === id) {
          todo.task = task;
          todo.date = rawDate.toLocaleString();
          todo.isChecked = isChecked;
        }
      });
      setTodos([...updatedTodos]);
      onClickTodoEditCancel();
    } else {
      setError({ isError: true, errorMsg: 'Please fill out all the fields' });
    }
  };
  const onClickTodoEditCancel = () => {
    setShowEditTodo({ isVisible: false, todoData: {} });
    setShowTodos(true);
  }
  const onClickTodoCheck = (id, isChecked) => {
    const updatedTodos = todos;
    updatedTodos.forEach(todo => {
      if (todo.id === id) {
        todo.isChecked = isChecked;
      }
    });
    setTodos([...updatedTodos]);
  };
  const onClickTodoDelete = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos([...updatedTodos]);
  };

  const onClickCloseError = () => {
    setError({ isError: false, errorMsg: '' });
  };

  return (
    <div className="container">
      <Header isBtnDisabled={isBtnDisabled} onClickNotes={onClickNotes} onClickTodos={onClickTodos} isNotesActive={isNotesActive} isTodosActive={isTodosActive} />
      {showNotes && <Notes notes={notes} onClickShowAddNote={onClickShowAddNote} onClickNoteDelete={onClickNoteDelete} onClickShowViewNote={onClickShowViewNote} />}
      {showTodos && <Todos todos={todos} onClickShowAddTodo={onClickShowAddTodo} onClickShowEditTodo={onClickShowEditTodo} onClickTodoCheck={onClickTodoCheck} onClickTodoDelete={onClickTodoDelete} />}
      {showAddNote && <AddNote onClickNoteSave={onClickNoteAdd} onClickNoteCancel={onClickNoteAddCancel} />}
      {showEditNote.isVisible && <EditNote noteData={showEditNote.noteData} onClickNoteSave={onClickNoteEdit} onClickNoteCancel={onClickNoteEditCancel} />}
      {showViewNote.isVisible && <ViewNote noteData={showViewNote.noteData} onClickViewNoteBack={onClickViewNoteBack} onClickShowEditNote={onClickShowEditNote} />}
      {showAddTodo && <AddTodo onClickTodoSave={onClickTodoAdd} onClickTodoCancel={onClickTodoAddCancel} />}
      {showEditTodo.isVisible && <EditTodo todoData={showEditTodo.todoData} onClickTodoSave={onClickTodoEdit} onClickTodoCancel={onClickTodoEditCancel} />}
      {error.isError && <Error errorMsg={error.errorMsg} onClickCloseError={onClickCloseError} />}
    </div>
  );
}

export default App;
