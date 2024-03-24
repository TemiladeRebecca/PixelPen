
import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import { Link } from 'react-router-dom';


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
                        <div className="card-body">
                            <h4 className="card-title text-center mb-4">PixelPen</h4>
                            <form>
                                <div className="form-group" style={{margin: "20px"}}>
                                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={onChange} style={{ color: "grey", border: "1px solid grey", borderRadius: "10px", height: "50px" }} />
                                </div>
                                <div className="form-group mt-2" style={{margin: "20px"}}>
                                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={onChange} style={{ color: "grey", border: "1px solid grey", borderRadius: "10px", height: "50px" }} />
                                </div>
                                <div className="form-check text-start my-3" style={{ display: "flex", justifyContent: "center", alignSelf: "center", margin: "20px"}}>
                                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"></input>
                                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{marginLeft: "5px"}}>
                                         Remember me
                                    </label>
                                </div>
                                <div style={{marginLeft: "12px"}}>
                                    <div style={{display: "flex", justifyContent: "center", alignSelf: "center"}}>
                                        <Link className="btn btn-success mx-4 text-black btn-block mt-2" to="/" role="button" style={{width: "100px"}}>Login</Link>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", alignSelf: "center", marginTop: "10px"}}>
                                    <p>or</p>
                                    </div>
                                    <GoogleSignIn />
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
