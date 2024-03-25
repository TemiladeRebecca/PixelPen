import React from "react";
import { Link } from 'react-router-dom';
import image from "../Images/work.jpg";
import "./Home.css";


function Home () {
    return (
        <>
        <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 text-body-emphasis">Organize yours thoughts effortlessly</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">With our intuitive and user-friendly interface, you can quickly create, edit, and manage notes wherever you go, whether you're at home, work, or on the go</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <Link className="btn btn-outline-primary mx-2 text-black" to="./login" role="button">Start for free</Link>
      </div>
    </div>
    <div className="overflow-hidden">
      <div className="container px-5">
      <img src={image} className="img-fluid border rounded-3 shadow-lg mb-4" alt="PIC" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>
  <div className="container px-4 py-5" id="featured-3">
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
      <div className="feature col">
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
      <div className="feature col">
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
    </div>
  </div>
  <div id="myCarousel" className="carousel slide mb-6 pointer-event" data-bs-ride="carousel" style={{height: "55vh", backgroundColor: "burlywood"}}>  
    <div className="carousel-inner">
      <div className="carousel-item" style={{height: "50vh"}}>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption text-start" style={{marginBottom: "70px"}}>
            <h1>Example headline.</h1>
            <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item active" style={{height: "50vh"}}>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption" style={{marginBottom: "70px"}}>
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item" style={{height: "50vh"}}>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption text-end" style={{marginBottom: "70px"}}>
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={image} className="d-block mx-lg-auto img-fluid" alt="PIC" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>
 
  </>
    );
}


export default Home;