import React, { useState } from "react";
import Header from "./components/notepad/Header";
import Footer from "./components/notepad/Footer";
import Note from "./components/notepad/Note";
import CreateNote from "./components/notepad/CreateNote";
import Login from "./components/Login";

function App() {
  const [notes, setNotes] = useState([]);
  const [displayNotePad, setDisplayNotePad] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const displayNote = () => {
    setDisplayNotePad((prevNote) => !prevNote);
  };
  const addNote = (newNote) => {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className={darkMode ? "appDark" : "appLight"}>
      <Login />
      {displayNotePad ? (
        <Header
          displayNote={displayNote}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      ) : (
        <CreateNote onAdd={addNote} />
      )}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
