import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar";
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
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}
      

export default App;
