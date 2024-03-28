import React, {useState} from "react";
import { Link } from 'react-router-dom';
import image from "../Images/notepad_image1.jpg";
import image1 from "../Images/notepad_image2.jpg"



function Home () {

  const [btnHovered, setBtnHovered] = useState(false)
  const styles = {
    "btn:hover": {
      boxShadow: "8px 8px 1px -5px rgba(0, 0, 0, 0.9)",
      transition: "transform 0.3s linear",
      transform: "scale(1.1)",
    },
  }
    return (
        <>
        <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold text-body-emphasis" style={{fontFamily: 'Times New Roman, serif' }}>Organize yours thoughts effortlessly</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4" style={{fontFamily: "Helvetica, sans-serif"}}>With our intuitive and user-friendly interface, you can quickly create, edit, and manage notes wherever you go, whether you're at home, work, or on the go</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <Link className="btn btn-primary btn-lg px-4 me-md-2 text-black" to="./login" role="button"
       style={{...(btnHovered && styles["btn:hover"]), marginTop: "20px"}}
       onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}>Start for free</Link>
      </div>
    </div>
    <div className="overflow-hidden">
      <div className="container px-5">
      <img src={image} className="img-fluid border rounded-3 shadow-lg mb-4" alt="PIC" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>
  <div className="container px-4 py-5" id="featured-3">
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3" style={{marginTop: "-70px"}}>
      <div className="feature col">
        <h3 className="fs-2 text-body-emphasis fw-bold" style={{fontFamily: 'Times New Roman, serif'}}>Stay organized</h3>
        <p style={{fontFamily: "Helvetica, sans-serif"}}>Remember everything by getting what you need, and when you need it, with powerful and flexible search capabilities.</p>
      </div>
      <div className="feature col">
        <h3 className="fs-2 text-body-emphasis fw-bold" style={{fontFamily: 'Times New Roman, serif'}}>Prioritize tasks</h3>
        <p style={{fontFamily: "Helvetica, sans-serif"}}>Turn to-dos into done by efficiently managing tasks, schedules, ideas and appointments easily and effectively.</p>
      </div>
      <div className="feature col">
        <h3 className="fs-2 text-body-emphasis fw-bold" style={{fontFamily: 'Times New Roman, serif'}}>Work efficiently</h3>
        <p style={{fontFamily: "Helvetica, sans-serif"}}>Keep important information handy and together. Update, edit, add notes and tasks from anywhere you are.</p>
      </div>
    </div>
  </div>
  <div id="myCarousel" className="carousel slide mb-6 pointer-event" data-bs-ride="carousel" style={{height: "55vh", backgroundColor: "burlywood"}}>  
    <div className="carousel-inner">
      <div className="carousel-item" style={{height: "50vh"}}>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption text-start" style={{marginBottom: "70px"}}>
            <h1>Unlock your creativity with every note.</h1>
            <p className="opacity-75">Ideas are worth saving</p>
          </div>
        </div>
      </div>
      <div className="carousel-item active" style={{height: "50vh"}}>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption" style={{marginBottom: "70px"}}>
            <h1>Let your ideas flow freely</h1>
            <p>Capture your thoughts, anytime, anywhere</p>
          </div>
        </div>
      </div>
      <div className="carousel-item" style={{height: "50vh"}}>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption text-end" style={{marginBottom: "70px"}}>
            <h1>Where creativity meets organization</h1>
            <p>Your digital canvas for inspiration, never miss a brilliant idea again</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={image1} className="d-block mx-lg-auto img-fluid" alt="PIC" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{fontFamily: 'Times New Roman, serif', marginTop: "-50px" }}>Hit every deadline</h1>
        <p className="lead" style={{fontFamily: "Helvetica, sans-serif", marginTop: "-10px"}}>Nothing important needs to be forgotten with our todo list feature to manage tasks, important schedules and stay productive</p>
      </div>
    </div>
  </div>
   
  </>
    );
}


export default Home;