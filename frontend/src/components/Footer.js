import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Footer () {
    const location = useLocation();
    const year = new Date().getFullYear();
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
          <Link
              className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} to="/">
                Home
            </Link>
          </li>
          <li className="nav-item">
          <Link
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="about">
                About
            </Link>    
          </li>
          <li className="nav-item">
          <Link
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="contact">
                Contact
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© {year} Company, Inc</p>
      </footer>
    </div>
  );
}