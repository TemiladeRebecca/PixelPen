import React from "react";
import {Link} from "react-router-dom"


function Notes () {
    return (
        <div style={{marginBottom: "20%"}}>
            <div className="d-flex flex-column flex-shrink-0 p-3" style={{width: "230px", backgroundColor: "#E0E0E0"}}>
          <div className="dropdown">
      <a href="p" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <span>temilade.rebecca20</span><i class="bi bi-bell"></i>
      </a>
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="p">New project...</a></li>
        <li><a className="dropdown-item" href="p">Settings</a></li>
        <li><a className="dropdown-item" href="p">Profile</a></li>
        <li><hr className="dropdown-divider"></hr></li>
        <li><a className="dropdown-item" href="p">Sign out</a></li>
      </ul>
    </div>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <button className="btn text-black btn-block mt-3">Add Note</button>
      </li>
      <li>
        <a href="p" className="nav-link link-body-emphasis">
          
          Search
        </a>
      </li>
      <li>
        <a href="p" className="nav-link link-body-emphasis">
          Today
        </a>
      </li>
      <li>
        <a href="p" className="nav-link link-body-emphasis">
          
          Upcoming
        </a>
      </li>
      <li>
      <Link className="btn text-black btn-block mt-3" to="./todo" role="button">Create Tasks</Link>
      </li>
    </ul>
  </div>
        </div>
    );
}







export default Notes;