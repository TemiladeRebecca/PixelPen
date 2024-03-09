import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/notepad/Header";
import Footer from "./components/notepad/Footer";
import Note from "./components/notepad/Note";
import Features from "./components/notepad/Features";
import CreateNote from "./components/notepad/CreateNote";

function App() {
  const [notes, setNotes] = useState([]);
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
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/features" element={<Features/>}></Route>
      </Routes>
      <CreateNote onAdd={addNote}/>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
