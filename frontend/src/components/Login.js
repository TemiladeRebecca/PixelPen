import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import GoogleSignIn from "./GoogleSignIn";


export default function Login() {
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
    <div>
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

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
            <h2>sign in with google</h2>
            <GoogleSignIn />
          </div>
        </div>
      </div>
    </div>
  );
}