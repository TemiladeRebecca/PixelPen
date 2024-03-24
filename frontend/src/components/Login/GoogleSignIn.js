import React, {useEffect} from 'react';
import { GoogleLogin } from 'react-google-login';


const GoogleSignIn = () => {
  
  const clientId = "701388701324-l6mi2isd86p3lef1lstd5pf46461qomg.apps.googleusercontent.com"
  const handleGoogleResponse = (response) => {
    if (response === "success") {
      console.log("success", response); 
    } else {
      console.log("failed", response);
    }
  };

  
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      clientId: "701388701324-8ai763ck2cmvbukid9uiopml8v5sq2vu.apps.googleusercontent.com",
      callback: handleGoogleResponse
    })
  }, [])

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large"}
  )

  
  return (
    <div>
      <div id="signInDiv">
      <GoogleLogin
        clientId={clientId}
        onSuccess={handleGoogleResponse}
        onFailure={handleGoogleResponse}
        cookiePolicy={'single_host_origin'}
      />
      </div>
      
    </div>
  );
};

export default GoogleSignIn;

