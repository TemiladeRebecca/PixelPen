import React, {useState} from "react";


function Todo () {

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    form: {
      position: 'relative',
      width: '400px',
      margin: '30px auto 20px 50px',
      background: '#fff',
      padding: '15px',
      borderRadius: '7px',
      boxShadow: '0 1px 5px rgb(138, 137, 137)',
    },
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

  const [showTask, setShowTask] = useState(false);
  const [createNewNotes, setCreateNewNotes] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setCreateNewNotes((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleTask() {
    setShowTask((prevValue) => !prevValue
  );
}

  function addNote(event) {
    setCreateNewNotes({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
    return (
      <div style={{display: "flex", marginBottom: "20%"}}>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "230px", marginRight: "10px"}}>
          <div className="dropdown">
      <a href="p" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
        <button className="btn text-black btn-block mt-3" onClick={handleTask}>Add Task</button>
      </li>
      <li>
        <a href="p" class="nav-link link-body-emphasis">
          
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
        <a href="p" className="nav-link link-body-emphasis">

          Filters
        </a>
      </li>
    </ul>
  </div>
  {showTask &&
    <div className="container" style={styles.container}>
      <form className="form" style={styles.form}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Task name"
          value={createNewNotes.title}
          style={styles.input}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Description..."
          value={createNewNotes.content}
          rows="3"
          style={styles.textarea}
        />
        <div style={{marginLeft: "170px"}}>
          <button className="btn btn-success mx-2 text-black btn-block mt-3"  onClick={addNote}>Add Task</button>
          <button className="btn btn-secondary mx-2 text-black btn-block mt-3" onClick={handleTask}>Cancel</button>
        </div>
      </form>
    </div>}
     
  </div>

    );
}


export default Todo;