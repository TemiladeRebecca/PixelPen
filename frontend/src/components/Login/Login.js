import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Login.css";


function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

    const onChange = (e) => {
      const {name, value} = e.target
        setCredentials({ ...credentials, [name]: value });
    };


  return (
    <div className="container" style={{ marginBottom: "20%" }}>
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="card" style={{ color: "black", border: '1px solid grey', borderRadius: '10px', height: "450px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}>
                        <div className="card-body" style={{marginTop: "20px"}}>
                            <h4 className="card-title text-center mb-4">PixelPen</h4>
                            <form>
                                <div className="form-group" style={{margin: "20px"}}>
                                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={onChange} style={{ color: "grey", border: "1px solid grey", borderRadius: "10px", height: "50px" }} />
                                </div>
                                <div className="form-group mt-2" style={{margin: "20px"}}>
                                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={onChange} style={{ color: "grey", border: "1px solid grey", borderRadius: "10px", height: "50px" }} />
                                </div>
                                <div className="form-check text-start my-3" style={{ display: "flex", justifyContent: "center", alignSelf: "center", margin: "20px"}}>
                                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" style={{marginRight: "2px"}}></input>
                                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{marginLeft: "2px"}}>
                                         Remember me
                                    </label>
                                </div>
                                <div style={{marginLeft: "12px"}}>
                                    <div style={{display: "flex", justifyContent: "center", alignSelf: "center"}}>
                                        <Link className="btn btn-success mx-4 text-black btn-block mt-2" to="/" role="button" style={{width: "100px"}}>Login</Link>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", alignSelf: "center"}}>
                                        <small class="text-body-secondary">Dont have an account <a href="./signup">sign up</a></small>
                                    </div>
                                    <hr className="mt-2 mb-3"/>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button class="gsi-material-button">
                                      <div class="gsi-material-button-state"></div>
                                      <div class="gsi-material-button-content-wrapper">
                                      <div class="gsi-material-button-icon">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{display: "block"}}>
                                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                          <path fill="none" d="M0 0h48v48H0z"></path>
                                        </svg>
                                        </div>
                                        <span class="gsi-material-button-contents">Sign in with Google</span>
                                        <span style={{display: "none"}}>Sign in with Google</span>
                                      </div>
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Login;
