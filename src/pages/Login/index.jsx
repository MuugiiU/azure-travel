import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = ({ handleClose, setUser }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const changeMode = () => {
    console.log("SET", isSignIn);
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      {isSignIn ? (
        <SignIn
          setIsSignIn={changeMode}
          handleClose={handleClose}
          setUser={setUser}
        />
      ) : (
        <SignUp setIsSignIn={changeMode} />
      )}
    </>
  );
};

export default Login;
