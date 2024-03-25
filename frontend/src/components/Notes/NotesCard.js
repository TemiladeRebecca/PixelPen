import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

export default function Note() {
    const [showNote, setshowNote] = useState(false);
    const [color, setColor] = useState(null);
    const [textColor, setTextColor] = useState('#808080');
    const [createNewNote, setCreateNewNote] = useState({
      title: "",
      description: ""
    });

    useEffect(() => {
        const colors = [
            'rgb(255, 228, 225)',
            'rgb(255, 218, 185)',
            'rgb(221, 160, 221)',
            'rgb(176, 224, 230)',
            'rgb(240, 230, 140)',
            'rgb(255, 192, 203)',
            'rgb(176, 196, 222)',
            'rgb(152, 251, 152)',
            'rgb(255, 250, 205)',
            'rgb(135, 206, 250)',
            'rgb(221, 221, 160)',
            'rgb(203, 255, 192)',
            'rgb(222, 176, 196)',
            'rgb(255, 204, 204)',
            'rgb(204, 204, 255)',
            'rgb(204, 255, 204)',
            'rgb(255, 204, 255)',
            'rgb(204, 255, 255)',
            'rgb(255, 230, 230)',
            'rgb(230, 255, 230)',
            'rgb(230, 230, 255)',
            'rgb(255, 240, 245)',
            'rgb(245, 255, 240)',
            'rgb(240, 245, 255)'
        ];
        // choosing a random color from the list of colors
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);

        // using the slice, split and map function to convert each of the
        // rgb colors to an integer to calculate brightness
        const [r, g, b] = randomColor.slice(4, -1).split(',').map(Number);
        const brightness = Math.sqrt(0.299 * (r ** 2) + 0.587 * (g ** 2) + 0.114 * (b ** 2));
        // set text color based on brightness
        if (brightness > 127.5) {
            setTextColor('#454545'); // set text to black for lighter backgrounds
        } else {
            setTextColor('#fff'); // set text to white for darker backgrounds
        }
    }, []);

    const styles = {
      input: {
        width: '100%',
        border: 'none',
        padding: '4px',
        outline: 'none',
        fontSize: '1.2em',
        fontFamily: 'sans-serif',
        resize: 'none',
      },

      textarea: {
        width: '100%',
        border: 'none',
        padding: '4px',
        outline: 'none',
        fontSize: '1.2em',
        fontFamily: 'sans-serif',
        resize: 'none',
      },
    }

    function handleNotes () {
        setshowNote((prevValue) => !prevValue);
    }

    function onChange (event) {
      const { name, value } = event.target;
      setCreateNewNote((prevValue) =>  ({...prevValue, [name] : value}));
    }
    

    return (
        <div style={{ display: "flex", marginBottom: "20%"}}>
          <div className="d-flex flex-column flex-shrink-0 p-3" style={{width: "230px", backgroundColor: "white"}}>
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
        <div style={{marginLeft: "5px"}}>
        <button className="btn text-black btn-block mt-3" onClick={handleNotes}>Add Note</button>
        </div>
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
      <div style={{margin: "-10px 0 0 2px"}}>
      <button className="btn text-black btn-block mt-3" >Note List</button>
      </div>
      </li>
      <li>
      <div style={{margin: "-10px 0 0 2px"}}>
      <Link className="btn text-black btn-block mt-3" to="./todo" role="button">Create Tasks</Link>
      </div>
      </li>
    </ul>
  </div>  
        {showNote &&
        <div className="col-md-4 mb-4">
            <div className="card shadow h-100" style={{ backgroundColor: color, color: textColor, marginLeft: "20px", width: "500px" }}>
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-left">
                        <p className="card-text mb-1 mt-2"></p>
                    </div>
                    <div>
                    <form className="form" style={{backgroundColor: color}}>
                      <input
                      onChange={onChange}
                      name="title"
                      placeholder="Title..."
                      value={createNewNote.title}
                      style={{...styles.input, backgroundColor: color}} />
                      <textarea
                        onChange={onChange}
                        name="description"
                        placeholder="Start writing..."
                        value={createNewNote.description}
                        rows="10"
                        style={{...styles.textarea, backgroundColor: color}}/>
                      </form>
                    </div>
                    <div>
                        <p className="card-text mb-1 mt-2"><small><strong>Tag:</strong>Urgent</small></p>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-sm btn-outline-danger me-2" >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-primary">
                                <i className="fas fa-edit"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </div>
    );
}