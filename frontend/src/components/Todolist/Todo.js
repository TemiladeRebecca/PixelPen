import React, { useState } from "react";
import {Link} from "react-router-dom"


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
  const [taskList, setTaskList] = useState([])
  const [showTaskList, setShowTaskList] = useState(false)
  const [createNewNotes, setCreateNewNotes] = useState({
    task: "",
    description: "",
  });
   
  
  function handleChange(event) {
    const { name, value } = event.target;
    setCreateNewNotes((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleTask() {
    setShowTask((prevValue) => !prevValue
  );
  setShowTaskList(false);
}

function addTodo(event) {
  setTaskList((prevValue) => [...prevValue, createNewNotes]);
  setCreateNewNotes({
    task: "",
    description: "",
  });
  event.preventDefault();
}
 function addList () {
  setShowTaskList((prevValue) => !prevValue)
 }

 function handleDelete(id) {
  setTaskList(prevValue => {
    return prevValue.filter((title, index) => {
      return index !== id
    });
  });
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
        <div style={{marginLeft: "5px"}}>
        <button className="btn text-black btn-block mt-3" onClick={handleTask}>Add Tasks</button>
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
        <div style={{margin: "-10px 0 0 5px"}}>
        <button className="btn text-black btn-block mt-3" onClick={addList} >Tasks</button>
        </div>
      </li>
      <li>
        <div style={{margin: "-10px 0 0 5px"}}>
          <Link className="btn text-black btn-block mt-3" to="./notes" role="button">Create Note</Link>
        </div>
      </li>
    </ul>
  </div>
  {showTask &&
    <div className="container" style={styles.container}>
      <form className="form" style={styles.form}>
        <input
          onChange={handleChange}
          name="task"
          placeholder="Task"
          value={createNewNotes.task}
          style={styles.input}
        />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Description..."
          value={createNewNotes.description}
          rows="3"
          style={styles.textarea}
        />
        <div style={{marginLeft: "170px"}}>
          <button className="btn btn-success mx-2 text-black btn-block mt-3"  onClick={addTodo}>Add Task</button>
          <button className="btn btn-secondary mx-2 text-black btn-block mt-3" onClick={handleTask}>Cancel</button>
        </div>
      </form>
    </div>}

    {showTaskList &&
    <div style={{ width: "100%", height: "100vh"}}>
    <h5 style={{marginLeft: "50px"}}>Task List</h5>
      {taskList.map((title, index) => (
        <div key={index} id={index} style={{...styles.form, width: "300px", height: "200px"}}>
          <div>{title.task}</div>
          <div>{title.description}</div>
          <div style={{marginLeft: "180px"}}><button className="btn btn-danger mx-2 text-black btn-block mt-3" onClick={() => handleDelete(index)}>Delete</button></div>
        </div>
      ))}
  </div> }
     
  </div>

    );
}


export default Todo;