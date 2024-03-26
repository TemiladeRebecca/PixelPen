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
      width: '600px',
      height: '250px',
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
  const [taskList, setTaskList] = useState([]);
  const [showTaskList, setShowTaskList] = useState(false);
  const [showPriority, setShowPriority] = useState("Priority");
  const [createNewList, setCreateNewList] = useState({
    task: "",
    description: "",
  });
   
  
  function handleChange(event) {
    const { name, value } = event.target;
    setCreateNewList((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleTask() {
    setShowTask((prevValue) => !prevValue
  );
  setShowTaskList(false);
}

function addTodo(event) {
  setTaskList((prevValue) => [...prevValue, createNewList]);
  setCreateNewList({
    task: "",
    description: "",
  });
  setShowPriority("Priority");
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
  function handlePriority1 (event) {
    setShowPriority("P1");
    event.preventDefault();
  }

  function handlePriority2 (event) {
    setShowPriority("P2");
    event.preventDefault();
  }

  function handlePriority3 (event) {
    setShowPriority("P3");
    event.preventDefault();
  }

  function handlePriority4 (event) {
    setShowPriority("P4");
    event.preventDefault();
  }
 
    return (
      <div style={{display: "flex", marginBottom: "20%"}}>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-white" style={{width: "230px", marginRight: "10px"}}>
          <div className="dropdown">
      <a href="p" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <span>temilade.rebecca20</span><i class="bi bi-bell"></i>
      </a>
      <ul className="dropdown-menu text-small shadow">
        <li><button className="dropdown-item" onClick={handleTask}>New task...</button></li>
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
          value={createNewList.task}
          style={styles.input}
        />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Description..."
          value={createNewList.description}
          rows="3"
          style={styles.textarea}
        />
        <hr className="mt-2 mb-3" style={{marginTop: "100px"}}/>
        <div className="dropdown" style={{marginTop: "20px"}}>
          <button className="d-flex align-items-center text-decoration-none dropdown-toggle btn text-black btn-block mt-3" data-bs-toggle="dropdown" aria-expanded="false">
            <span>{showPriority}</span>
          </button>
            <ul className="dropdown-menu text-small shadow">
              <li><button className="dropdown-item" onClick={handlePriority1}>Priority 1</button></li>
              <li><button className="dropdown-item" onClick={handlePriority2}>Priority 2</button></li>
              <li><button className="dropdown-item" onClick={handlePriority3}>Priority 3</button></li>
              <li><button className="dropdown-item" onClick={handlePriority4}>Priority 4</button></li>
            </ul>
        </div>
        <div style={{margin: "-30px 0 0 390px"}}>
          <button className="btn btn-success btn-sm mx-2 text-black btn-block mt-3"  onClick={addTodo}>Add Task</button>
          <button className="btn btn-secondary btn-sm mx-2 text-black btn-block mt-3" onClick={handleTask}>Cancel</button>
        </div>
      </form>
    </div>}

    {showTaskList &&
    <div style={{ width: "100%", height: "100vh"}}>
    <h5 style={{marginLeft: "50px", fontFamily: 'Times New Roman, serif'}}>Task List</h5>
      {taskList.map((title, index) => (
        <div key={index} id={index} style={{...styles.form, width: "300px", height: "200px"}}>
          <div>{title.task}</div>
          <div>{title.description}</div>
          <div style={{margin: "80px 0 0 200px"}}><button className="btn btn-danger btn-sm mx-2 text-black btn-block mt-3" onClick={() => handleDelete(index)}>Delete</button></div>
        </div>
      ))}
  </div> }
     
  </div>

    );
}


export default Todo;