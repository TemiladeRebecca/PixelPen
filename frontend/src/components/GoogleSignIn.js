import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';


const clientId = "701388701324-8ai763ck2cmvbukid9uiopml8v5sq2vu.apps.googleusercontent.com";

const GoogleSignIn = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [name, setName] = useState();

  const responseGoogle = (response) => {
    setName(response.profileObj["name"]);
    if (response === "success") {
      console.log("success", response);
      setLoginStatus(true); 
    } else {
      console.log("failed", response);
    }
  };

  return (
    <div>
      {loginStatus ? <h2>Hello {name}</h2> :
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
  }
    </div>
  );
};

export default GoogleSignIn;

