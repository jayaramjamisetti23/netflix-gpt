import React, { useState, useRef } from "react";
import Header from "./Header";
import Config from "../Config.js/configImages";
import { checkValidation } from "../Config.js/Validate";

function Login() {
  const [isSignIn, setSignIn] = useState(true);
  const [messasge, setMessasge] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toogleSignInForm = () => {
    setSignIn(!isSignIn);
  };
  const submit = () => {
    console.log("emial", email);
    const message = checkValidation(
      email.current?.value,
      password.current?.value
    );
    console.log(message);
    setMessasge(message);
  };
  return (
    <div>
      <Header />

      <div className="absolute w-full">
        <img
          src={Config.netflixBodyImg}
          alt="Netflix Body"
          className="w-full"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 my-36 p-12 mx-auto right-0 left-0 rounded-lg  bg-opacity-80 text-white"
      >
        <h1 className="text-3xl font-bold my-4">
          {!isSignIn ? "Sign Up" : "Sign in"}
        </h1>
        <h6 className="text-red-600">{messasge}</h6>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or phone number"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-full bg-gray-700"
        />
        <button
          type="submit"
          onClick={() => submit()}
          className="p-2 my-4 w-full bg-red-700 text-white rounded-md hover:bg-red-700 cursor-pointer"
        >
          {!isSignIn ? "Sign Up" : "Sign in"}
        </button>
        <h6 className="my-10 text-lg" onClick={toogleSignInForm}>
          {" "}
          New to Netflix?{" "}
          <span className="font-bold cursor-pointer">
            {!isSignIn ? "Sign in" : "Sign Up"}
          </span>{" "}
        </h6>
        <p className="text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-500 underline">Learn more.</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
