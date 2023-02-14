import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useContext } from "react";
import { UserContext } from "../../context";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  // const { isSignIn, setIsSignIn } = useContext(UserContext);
  const changeMode = () => {
    console.log("SET", isSignIn);
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      {isSignIn ? (
        <SignIn setIsSignIn={changeMode} />
      ) : (
        <SignUp setIsSignIn={changeMode} />
      )}
    </>
  );
};

export default Login;
