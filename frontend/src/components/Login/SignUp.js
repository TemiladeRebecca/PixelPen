import React from 'react';


function SignUp () {

    return (
        <div class="row align-items-center g-lg-5 py-5" style={{marginBottom: "20%",}}>
      <div class="col-lg-6 text-center text-lg-start" style={{margin: "50px"}}>
        <h1 class="display-4 lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
        <p class="col-lg-8 fs-5">Below is an example form built entirely with Bootstrap form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-4">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
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
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
    );
};

export default SignUp;