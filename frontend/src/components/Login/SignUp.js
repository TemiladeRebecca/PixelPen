import React, { useState } from 'react';
import {Link} from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";

const SignUp = () => {
    
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container" style={{ marginBottom: "20%" }}>
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="card" style={{ color: "black", border: '1px solid grey', borderRadius: '10px', height: "450px" }}>
                        <div className="card-body">
                            <h4 className="card-title text-center mb-4">PixelPen</h4>
                            <form>
                                <div className="form-group" style={{margin: "20px"}}>
                                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={onChange} style={{ color: "grey", border: "1px solid grey", borderRadius: "10px", height: "50px" }} />
                                </div>
                                <div className="form-group mt-2" style={{margin: "20px"}}>
                                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={onChange} style={{ color: "grey", border: "1px solid grey", borderRadius: "10px", height: "50px" }} />
                                </div>
                                <div class="form-check text-start my-3" style={{justifyContent: "center", alignSelf: "center", marginLeft: "20px"}}>
                                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"></input>
                                    <label class="form-check-label" for="flexCheckDefault">
                                         Remember me
                                    </label>
                                </div>
                                <div style={{marginLeft: "20px"}}>
                                    <Link className="btn btn-success mx-2 text-black btn-block mt-3" to="/" role="button" style={{ borderRadius: '10px', width: "120px", marginBottom: "10px"}}>Login</Link>
                                    <p style={{marginLeft: "50px", marginBottom: "5px"}}>or</p>
                                    <GoogleSignIn />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;