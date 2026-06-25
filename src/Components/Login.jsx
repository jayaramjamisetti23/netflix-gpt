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
    <div className="relative min-h-screen overflow-hidden bg-black">
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
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-28 text-white sm:px-8 lg:py-36"
      >
        <div className="rounded-lg bg-black/80 p-6 shadow-2xl sm:p-10 md:p-12">
          <h1 className="my-4 w-full text-center text-2xl font-bold sm:text-3xl">
            {!isSignIn ? "Sign Up" : "Sign in"}
          </h1>
          <h6 className="min-h-5 text-sm text-red-600 sm:text-base">
            {messasge}
          </h6>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="my-3 w-full rounded bg-gray-700 p-3 text-sm outline-none focus:ring-2 focus:ring-white/60 sm:my-4 sm:text-base"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            className="my-3 w-full rounded bg-gray-700 p-3 text-sm outline-none focus:ring-2 focus:ring-white/60 sm:my-4 sm:text-base"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-3 w-full rounded bg-gray-700 p-3 text-sm outline-none focus:ring-2 focus:ring-white/60 sm:my-4 sm:text-base"
          />
          <button
            type="submit"
            onClick={() => submit()}
            className="my-4 w-full cursor-pointer rounded-md bg-red-700 p-3 text-sm font-semibold text-white hover:bg-red-800 sm:text-base"
          >
            {!isSignIn ? "Sign Up" : "Sign in"}
          </button>
          <h6
            className="my-8 w-full text-center text-base sm:my-10 sm:text-md"
            onClick={toogleSignInForm}
          >
            {" "}
            New to Netflix?{" "}
            <span className="cursor-pointer font-bold">
              {!isSignIn ? "Sign in" : "Sign Up"}
            </span>{" "}
          </h6>
          <p className="text-xs w-full text-center leading-5 sm:text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-500 underline">Version 2.2</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
