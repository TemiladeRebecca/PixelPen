import React from 'react';
import {Link} from "react-router-dom";


function SignUp () {

    return (
        <div class="row align-items-center g-lg-2 py-3" style={{margin: "50px 50px 150px 50px"}}>
      <div class="col-lg-6 text-center text-lg-start" style={{marginTop: "0px"}}>
        <h1 class="display-4 lh-1 text-body-emphasis mb-3" style={{ fontFamily: 'Arial, serif' }}>Welcome to PixelPen</h1>
        <p class="col-lg-8 fs-5" style={{marginLeft: "10px"}}>Capture every idea, accomplish every goal. <span style={{marginLeft: "100px"}}>Start with us Today!</span></p>
      </div>
      <div class="col-md-8 mx-auto col-lg-4">
        <form class="p-4 p-md-5 border rounded-3" style={{backgroundColor: "white"}}>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm password"></input>
            <label for="floatingPassword">Confirm Password</label>
          </div>
          <Link class="w-100 btn btn-lg btn-primary" role="button" to="/login">Sign up</Link>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
    );
};

export default SignUp;