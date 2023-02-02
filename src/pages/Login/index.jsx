import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const Login = (handleClose, login) => {
  const [SignIn, setSignIn] = useState(true);
  return (
    <>
      {SignIn ? (
        <SignIn setSignin={setSignIn} handleClose={handleClose} login={login} />
      ) : (
        <SignUp setSignIn={setSignIn} />
      )}
    </>
  );
};

export default Login;
