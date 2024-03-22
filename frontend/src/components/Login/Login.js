
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import GoogleSignIn from "./GoogleSignIn";
import { Link } from 'react-router-dom';
import image from "../../Images/work.jpg";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Login successful");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <div style={{display: "flex", margin: "0px"}}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-4 p-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                        const {value} = e.target.value;
                        setEmail(value);
                    }
                }
              />

              <input
                type="password"
                className="form-control mb-4 p-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                    const {value} = e.target.value;
                    setPassword(value);
                }
            }
              />

            <Link className="btn btn-outline-success mx-2 text-black" to="/" role="button">Submit</Link>
            </form>
            <GoogleSignIn />
          </div>
        </div>
      </div>
      <div className="col-6 col-sm-8 col-lg-6" style={{margin: "0px"}}>
        <img src={image} className="d-block mx-lg-auto img-fluid" alt="PIC" width="500" height="500" loading="lazy" />
      </div>  
    </div>
  );
}

export default Login;
