import React, { useState, useRef } from "react";
import { checkValidation } from "../Config.js/Validate";

function SignUp({ toogleSignInForm }) {
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
    <div className="rounded-lg bg-black/80 p-4 shadow-2xl sm:p-8 md:p-10 w-full">
      <h1 className="mb-4 w-full text-center text-2xl font-bold sm:text-3xl">
        Sign Up
      </h1>
      <h6 className="min-h-5 text-sm text-red-600 sm:text-base">
        {messasge}
      </h6>
      <input
        type="text"
        placeholder="Full Name"
        className="my-2 w-full rounded bg-gray-700 p-2 text-sm outline-none focus:ring-2 focus:ring-white/60 sm:my-3 sm:p-3 sm:text-base"
      />
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
      <button
        type="submit"
        onClick={() => submit()}
        className="my-3 w-full cursor-pointer rounded-md bg-red-700 p-2 text-sm font-semibold text-white hover:bg-red-800 sm:my-4 sm:p-3 sm:text-base"
      >
        Sign Up
      </button>
      <h6
        className="my-4 w-full text-center text-base sm:my-6 sm:text-md"
        onClick={toogleSignInForm}
      >
        {" "}
        New to Netflix?{" "}
        <span className="cursor-pointer font-bold">
          Sign in
        </span>{" "}
      </h6>
      <p className="text-xs w-full text-center leading-5 sm:text-sm">
        This page is protected by Google reCAPTCHA to ensure you're not a
        bot. <span className="text-blue-500 underline">Version 3.4</span>
      </p>
    </div>
  );
}

export default SignUp;
