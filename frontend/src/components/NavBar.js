import React from "react";
import { Link, useLocation } from 'react-router-dom';

function NavBar () { 
  const location = useLocation();
    return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <span>PixelPen</span>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <li>
            <Link
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="about">
                About
            </Link>
            </li>
            <li>
            <Link
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="contact">
                Contact
            </Link>
            </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Explore
          </a>
            
          <ul className="dropdown-menu">
          <li>
            <Link
              className={`nav-link ${location.pathname === '/notes' ? 'active' : ''}`} to="notes">
                Take Notes
            </Link>
            </li>
            <li>
            <Link
              className={`nav-link ${location.pathname === '/todo' ? 'active' : ''}`} to="todo">
                Todos
            </Link>
            </li>
          </ul>
        </li>
        </ul>
      <form>
        <Link className="btn btn-outline-primary mx-2 text-white" to="./login" role="button">Log In</Link>
        <Link className="btn btn-outline-primary mx-2 text-white" to="./signup" role="button">Sign Up</Link>
      </form>
      </div>
    </div>
  </header>
  );
}


export default NavBar;