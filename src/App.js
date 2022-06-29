import { useState, useEffect } from 'react';
import Header from './components/Header';
import Notes from './components/Notes';
import Todos from './components/Todos';

function App() {
  const [showNotes, setShowNotes] = useState(false);
  const [showTodos, setShowTodos] = useState(false);

  useEffect(() => {
    setShowNotes(true);
    setShowTodos(false);
  }, []);

  const onClickTodos = () => {
    setShowTodos(true);
    setShowNotes(false);
  };

  const onClickNotes = () => {
    setShowNotes(true);
    setShowTodos(false);
  };

  return (
    <div className="container">
      <Header onClickNotes={onClickNotes} onClickTodos={onClickTodos} />
      {showNotes && <Notes />}
      {showTodos && <Todos />}
    </div>
  );
}

export default App;
