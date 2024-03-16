import React from "react";
import { Link, useLocation } from 'react-router-dom';

function NavBar () {
  const location = useLocation();
    return (
    <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <span>PixelPen</span>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="about">
                About
            </Link>
            </li>
            <li>
            <Link
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="contact">
                Contact
            </Link>
            </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
          <li>
            <Link
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="notes">
                Take Notes
            </Link>
            </li>
            <li>
            <Link
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="todos">
                Todos
            </Link>
            </li>
          </ul>
        </li>
        </ul>
      <form>
        <Link className="btn btn-outline-success mx-2 text-white" to="./login" role="button">Log In</Link>
        <Link className="btn btn-outline-success mx-2 text-white" to="./signup" role="button">Sign Up</Link>
      </form>
      </div>
    </div>
  </header>
  );
}


export default NavBar;