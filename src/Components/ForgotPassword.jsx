import React, { useState, useRef } from "react";

function ForgotPassword({ setActiveForm }) {
  const [messasge, setMessasge] = useState(null);
  const email = useRef(null);

  const submit = () => {
    if (!email.current?.value) {
      setMessasge("Please enter a valid email or phone number.");
      return;
    }
    setMessasge("Password reset link sent to your email!");
  };

  return (
    <div className="w-full">
      <h1 className="mb-4 w-full text-center text-2xl font-bold sm:text-3xl">
        Forgot Password
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
      <button
        type="submit"
        onClick={() => submit()}
        className="my-3 w-full cursor-pointer rounded-md bg-red-700 p-2 text-sm font-semibold text-white hover:bg-red-800 sm:my-4 sm:p-3 sm:text-base"
      >
        Email Me
      </button>
      <h6 className="my-4 w-full text-center text-base sm:my-6 sm:text-md">
        <span
          className="cursor-pointer text-gray-300 hover:underline"
          onClick={() => setActiveForm("signin")}
        >
          Back to Sign In
        </span>
      </h6>
    </div>
  );
}

export default ForgotPassword;
