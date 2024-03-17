import React from "react";
import { Link } from 'react-router-dom';
import image from "../Images/work.jpg"
import "./Home.css";


function Home () {
    return (
        <>
        <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold text-body-emphasis">Organizing yours thoughts effortlessly</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">With our intuitive and user-friendly interface, you can quickly create, edit, and manage notes wherever you go, whether you're at home, work, or on the go</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <Link className="btn btn-outline-primary mx-2 text-black" to="./login" role="button">Start for free</Link>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="container px-5">
      <img src={image} class="img-fluid border rounded-3 shadow-lg mb-4" alt="PIC" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>
  <div class="container px-4 py-5" id="featured-3">
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <h3 class="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
      <div class="feature col">
        <h3 class="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
      <div class="feature col">
        <h3 class="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
    </div>
  </div>
  </>
    );
}


export default Home;