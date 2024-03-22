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

  const buttonStyles = {
    width: '400px', // Adjust width as needed
    height: '40px', // Adjust height as needed
    backgroundColor: '#4285f4', // Example background color
    color: '#fff', // Example text color
    borderRadius: '4px', // Example border radius
    border: 'none', // Remove border if desired
    cursor: 'pointer', // Add pointer cursor
    fontSize: '16px', // Adjust font size as needed
    fontWeight: 'bold', // Adjust font weight as needed
    textAlign: 'center', // Center text
    lineHeight: '40px', // Center vertically
    // Add any other styles you want
  };

  
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        style={{...buttonStyles}}
      />
    </div>
  );
};

export default GoogleSignIn;

