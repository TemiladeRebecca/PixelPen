import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Footer () {
    const location = useLocation();
    const year = new Date().getFullYear();
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
          <Link
              className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} to="/">
                Home
            </Link>
          </li>
          <li class="nav-item">
          <Link
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="about">
                About
            </Link>    
          </li>
          <li class="nav-item">
          <Link
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="contact">
                Contact
            </Link>
          </li>
        </ul>
        <p class="text-center text-body-secondary">© {year} Company, Inc</p>
      </footer>
    </div>
  );
}