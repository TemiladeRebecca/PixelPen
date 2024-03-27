import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact"
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import NavBar from "./components/NavBar";
import Todo from "./components/Todolist/Todo";
import Note from "./components/Notes/NotesCard";
import Footer from "./components/Footer";




function App() {

  const [backgroundColor, setbackgroundColor] = useState();

  const generateRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 5) + 95; // 95-100%
    const lightness = Math.floor(Math.random() * 5) + 95; // 95-100%
    const alpha = Math.floor(Math.random() * 5) + 3; // 3-7%
    const color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.${alpha})`;
    setbackgroundColor(color);
  };

  useEffect(() => {
    generateRandomColor();
  }, []);

  const backgroundStyle = {
    backgroundColor: backgroundColor,
  }

  return (
    <div style={backgroundStyle}>
      <BrowserRouter>
      <NavBar />
      <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/about/login" element={<Login/>}></Route>
        <Route path="/about/notes" element={<Note/>}></Route>
        <Route path="/about/home" element={<Home/>}></Route>
        <Route path="/about/todo" element={<Todo/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/login/signup" element={<SignUp/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signup/login" element={<Login/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/todo/notes" element={<Note/>}></Route>
        <Route path="/notes" element={<Note/>}></Route>
        <Route path="/notes/todo" element={<Todo/>}></Route>
      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}
      

export default App;
