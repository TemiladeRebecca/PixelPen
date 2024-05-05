import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

export default function Note() {
    const [showNote, setShowNote] = useState(false);
    const [color, setColor] = useState(null);
    const [textColor, setTextColor] = useState('#808080');
    const [showTag, setShowTag] = useState("Select a tag");
    const [showInputText, setShowInputText] = useState(false);
    const [inputValue, setInputValue] = useState({input: ""});
    const [createNewNote, setCreateNewNote] = useState({
      title: "",
      description: ""
    });
    const [createNoteItem, setCreateNoteItem] = useState([]);
    const [showNoteList, setShowNoteList] = useState(false);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editIndex, setEditIndex] = useState(null);

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

    const date = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const newDate = date.toLocaleDateString('en-NG', options);


    function handleNotes () {
        setShowNote((prevValue) => !prevValue);
        setShowNoteList(false);
    }

    function onChange (event) {
      const { name, value } = event.target;
      setCreateNewNote((prevValue) =>  ({...prevValue, [name] : value}));
    }

    function handleTagShopping () {
      setShowTag("Shopping");
    }

    function handleTagWork () {
      setShowTag("Work");
    }

    function handleTagPersonal () {
      setShowTag("Personal");
    }

    function inputChange (event) {
      const { value} = event.target;
      setShowTag(value); // Update showTag with the input value
      setInputValue({ input: value }); // Update inputValue state
    }

    function handleShowInputText () {
      setShowInputText((prevValue) => !prevValue);
      setInputValue({input: ""});
    }

    function addNote(event) {
      // Create a new task object with task, description, tagColor, and priority properties
      const newTask = {
        title: createNewNote.title,
        description: createNewNote.description,
        tag: showTag,
        noteDate: newDate,
      };
    
      // Update the task list with the new task object
      setCreateNoteItem((prevValue) => [...prevValue, newTask]);
    
      // Clear the input fields
      setCreateNewNote({
        title: "",
        description: "",
      });
    
      // Reset the priority and tag color
      setShowTag("Select a tag");
    
      // Prevent the default form submission behavior
      event.preventDefault();
    }

    function handleShowNoteList () {
      setShowNoteList((prevValue) => !prevValue);
    }

    function handleDeleteNote(id) {
      setCreateNoteItem(prevValue => {
        return prevValue.filter((note, index) => {
          // return all notes with id not equal to the selected task
          return index !== id 
        });
      });
    }


  function handleEditNoteClick(index) {
    setEditIndex(index);
    setEditTitle(createNoteItem[index].title);
    setEditDescription(createNoteItem[index].description);
  }
  
  function handleUpdateNote() {
    setCreateNoteItem(prevValue => {
      const updatedNotes = [...prevValue];
      updatedNotes[editIndex] = {
        ...updatedNotes[editIndex],
        title: editTitle,
        description: editDescription
      };
      return updatedNotes;
    });
    setEditIndex(null); // Reset editing mode
  }
  

    return (
        <div style={{ display: "flex", marginBottom: "20%"}}>
          <div className="d-flex flex-column flex-shrink-0 p-3" style={{width: "230px", backgroundColor: "white"}}>
          <div className="dropdown" style={{display: "flex", alignItems: "center"}}>
          <a href="p" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <span>temilade.rebecca20</span><i class="bi bi-bell"></i>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li><button className="dropdown-item" onClick={handleNotes}>New note...</button></li>
            <li><a className="dropdown-item" href="p">Settings</a></li>
            <li><a className="dropdown-item" href="p">Profile</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="p">Sign out</a></li>
          </ul>
          <div style={{marginLeft: "10px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
        </svg>
        </div>
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
              <button className="btn text-black btn-block mt-3" onClick={() => handleShowNoteList()}>Note List</button>
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
                  <p className="card-text mb-1 mt-2" style={{marginLeft: "350px"}}>{newDate}</p>
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
                  <hr className="mt-2 mb-3"/>
                  <div className="dropdown">
                    <button className="d-flex align-items-center text-decoration-none dropdown-toggle btn text-black btn-block mt-3" data-bs-toggle="dropdown" aria-expanded="false">
                      <span>{showTag}</span>
                    </button>
                      <ul className="dropdown-menu text-small shadow">
                        <li><button className="dropdown-item" onClick={handleTagShopping}>Shopping</button></li>
                        <li><button className="dropdown-item" onClick={handleTagWork}>Work</button></li>
                        <li><button className="dropdown-item" onClick={handleTagPersonal}>Personal</button></li>
                        <li>
                        <button className="dropdown-item" onClick={handleShowInputText}>Others...</button>
                        {showInputText && (
                        <li>
                          <input onChange={inputChange} name="input" value={inputValue.input}/>
                        </li>)}
                          </li>
                        </ul>
                    </div>
                  <div className="d-flex justify-content-end" style={{marginBottom: "10px"}}>
                    <button className="btn btn-success btn-sm mx-2 text-black btn-block mt-3" onClick={addNote}>Add Note</button>
                    <button className="btn btn-danger btn-sm mx-2 text-black btn-block mt-3" onClick={handleNotes}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>}        
      {showNoteList &&
      <div style={{marginLeft: "50px"}}>
        <h5 style={{fontFamily: 'Times New Roman, serif', justifyContent: "content", marginLeft: "100px"}}>Note List</h5>
        {createNoteItem.map((note, index) => (
  <div class="card" key={index} style={{width: "23rem"}}>
    <div class="card-body" key={index}>
      {editIndex === index ? ( // Render edit form if editing this note
        <form onSubmit={handleUpdateNote}>
          <input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
          <textarea value={editDescription} onChange={e => setEditDescription(e.target.value)} />
          <button type="submit">Update</button>
          <button type="button" onClick={() => setEditIndex(null)}>Cancel</button>
        </form>
      ) : ( // Render note details if not editing
        <>
          <h5 class="card-title">{note.noteDate}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{note.title}</h6>
          <p class="card-text">{note.description}</p>
          <p className="card-text"><small><strong>Tag:</strong> {note.tag}</small></p>
          <div className="d-flex justify-content-end">
            <button className="btn btn-sm btn-outline-danger me-2" onClick={() => handleDeleteNote(index)}>Delete</button>
            <button className="btn btn-sm btn-outline-primary" onClick={() => handleEditNoteClick(index)}>Edit</button>
          </div>   
        </>
      )}
    </div>
  </div>
))}
    </div>}   
  </div>
  );
}


