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
  const [tagColor, setTagcolor] = useState("#000000");
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
  // Create a new task object with task, description, tagColor, and priority properties
  const newTask = {
    task: createNewList.task,
    description: createNewList.description,
    tagColor: tagColor,
  };

  // Update the task list with the new task object
  setTaskList((prevValue) => [...prevValue, newTask]);

  // Clear the input fields
  setCreateNewList({
    task: "",
    description: "",
  });

  // Reset the priority and tag color
  setShowPriority("Priority");
  setTagcolor("#000000");

  // Prevent the default form submission behavior
  event.preventDefault();
}

 function addList () {
  setShowTaskList((prevValue) => !prevValue)
 }

 function handleDelete(id) {
  setTaskList(prevValue => {
    return prevValue.filter((title, index) => {
      // return all tasks with id not equal to the selected task
      return index !== id 
    });
  });
}
  function handlePriority1 (event) {
    setTagcolor("#FF0000");
    setShowPriority("P1");
    event.preventDefault();
  }

  function handlePriority2 (event) {
    setTagcolor("#FFFF33");
    setShowPriority("P2");
    event.preventDefault();
  }

  function handlePriority3 (event) {
    setTagcolor("#0000CC");
    setShowPriority("P3");
    event.preventDefault();
  }

  function handlePriority4 (event) {
    setTagcolor("#000000");
    setShowPriority("P4");
    event.preventDefault();
  }
 
    return (
      <div style={{display: "flex", marginBottom: "20%"}}>
        <div className="d-flex flex-column flex-shrink-1 p-3 bg-body-white" style={{width: "300px", marginRight: "10px"}}>
          <div className="dropdown" style={{display: "flex", alignItems: "center"}}>
      <a href="p" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <span>temilade.rebecca20</span>
      </a> 
      <ul className="dropdown-menu text-small shadow">
        <li><button className="dropdown-item" onClick={handleTask}>New task...</button></li>
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
    <div className="container " style={{...styles.container}}>
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
              <li><button className="dropdown-item" onClick={handlePriority1}><button className="btn btn-sm me-2" style={{backgroundColor: "#FF0000"}}></button>Priority 1</button></li>
              <li><button className="dropdown-item" onClick={handlePriority2}><button className="btn btn-sm me-2" style={{backgroundColor: "#FFFF33"}}></button>Priority 2</button></li>
              <li><button className="dropdown-item" onClick={handlePriority3}><button className="btn btn-sm me-2" style={{backgroundColor: "#0000CC"}}></button>Priority 3</button></li>
              <li><button className="dropdown-item" onClick={handlePriority4}><button className="btn btn-sm me-2" style={{backgroundColor: "#000000"}}></button>Priority 4 <span>&#10003;</span></button></li>
            </ul>
        </div>
        <div style={{margin: "-30px 0 0 390px"}}>
          <button className="btn btn-success btn-sm mx-2 text-black btn-block mt-3"  onClick={addTodo}>Add Task</button>
          <button className="btn btn-secondary btn-sm mx-2 text-black btn-block mt-3" onClick={handleTask}>Cancel</button>
        </div>
      </form>
    </div>}

    {showTaskList &&
    <div style={{ width: "100%", height: "100vh", marginLeft: "100px"}}>
    <h5 style={{fontFamily: 'Times New Roman, serif', justifyContent: "content"}}>Task List</h5>
      {taskList.map((title, index) => (
        <div class="card" key={index} id={index}style={{width: "18rem"}}>
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-body-secondary"><button className="btn btn-sm me-2" style={{backgroundColor: title.tagColor}}></button> {title.task}</h6>
          <p class="card-text">{title.description}</p>
          <div style={{marginLeft: "180px"}}>
          <button className="btn btn-danger btn-sm mx-2 text-black btn-block mt-3" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      </div>
      ))}
  </div> }
  
  </div>

    );
}


export default Todo;