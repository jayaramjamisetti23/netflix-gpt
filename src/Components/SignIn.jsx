import React, { useState, useRef } from "react";
import { checkValidation } from "../Config.js/Validate";

function SignIn({ setActiveForm }) {
  const [messasge, setMessasge] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const submit = () => {
    console.log("email", email);
    const message = checkValidation(
      email.current?.value,
      password.current?.value
    );
    console.log(message);
    setMessasge(message);
  };

  return (
    <div className="w-full">
      <h1 className="mb-4 w-full text-center text-2xl font-bold sm:text-3xl">
        Sign in
      </h1>
      <h6 className="min-h-5 text-sm text-red-600 sm:text-base">
        {messasge}
      </h6>
      <input
        ref={email}
        type="email"
        placeholder="Email or phone number"
        className="my-2 w-full rounded bg-gray-700 p-2 text-sm outline-none focus:ring-2 focus:ring-white/60 sm:my-3 sm:p-3 sm:text-base"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="my-2 w-full rounded bg-gray-700 p-2 text-sm outline-none focus:ring-2 focus:ring-white/60 sm:my-3 sm:p-3 sm:text-base"
      />
      <h6 className="mt-2 mb-3 w-full text-center text-xs sm:text-sm">
        <span 
          className="cursor-pointer text-gray-400 hover:underline" 
          onClick={() => setActiveForm("forgot")}
        >
          Forgot password?
        </span>
      </h6>
      <button
        type="submit"
        onClick={() => submit()}
        className="my-3 w-full cursor-pointer rounded-md bg-red-700 p-2 text-sm font-semibold text-white hover:bg-red-800 sm:my-4 sm:p-3 sm:text-base"
      >
        Sign In
      </button>
      <h6
        className="my-4 w-full text-center text-base sm:my-6 sm:text-md"
      >
        {" "}
        New to Netflix?{" "}
        <span 
          className="cursor-pointer font-bold hover:underline"
          onClick={() => setActiveForm("signup")}
        >
          Sign Up
        </span>{" "}
      </h6>
    </div>
  );
}

export default SignIn;
