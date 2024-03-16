import React from 'react';
import { GoogleLogin } from 'react-google-login';


const clientId = "701388701324-8ai763ck2cmvbukid9uiopml8v5sq2vu.apps.googleusercontent.com";

const GoogleSignIn = () => {
  const responseGoogle = (response) => {
    if (response === "success") {
      console.log("success", response); 
    } else {
      console.log("failed", response);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleSignIn;

