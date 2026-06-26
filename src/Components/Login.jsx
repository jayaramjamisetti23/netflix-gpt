import React, { useState } from "react";
import Header from "./Header";
import Config from "../Config.js/configImages";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Login() {
  const [isSignIn, setSignIn] = useState(true);

  const toogleSignInForm = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <Header />

      <div className="absolute inset-0">
        <img
          src={Config.netflixBodyImg}
          alt="Netflix Body"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col justify-center px-4 sm:px-6"
      >
        {isSignIn ? (
          <SignIn toogleSignInForm={toogleSignInForm} />
        ) : (
          <SignUp toogleSignInForm={toogleSignInForm} />
        )}
      </form>
    </div>
  );
}

export default Login;
