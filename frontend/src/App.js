import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo List/Todo";
import Footer from "./components/Footer";




function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/about/login" element={<Login/>}></Route>
        <Route path="/about/signup" element={<SignUp/>}></Route>
        <Route path="/about/home" element={<Home/>}></Route>
        <Route path="/about/todo" element={<Todo/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signup/home" element={<Home/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}
      

export default App;
