import React, { useState } from "react";
import Header from "./Header";
import Config from "../Config.js/configImages";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

function Login() {
  const [activeForm, setActiveForm] = useState("signin");

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
        <div className="rounded-lg bg-black/80 p-4 shadow-2xl sm:p-8 md:p-10 w-full">
          {activeForm === "signin" && <SignIn setActiveForm={setActiveForm} />}
          {activeForm === "signup" && <SignUp setActiveForm={setActiveForm} />}
          {activeForm === "forgot" && <ForgotPassword setActiveForm={setActiveForm} />}
          <p className="text-xs w-full text-center leading-5 sm:text-sm mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-500 underline">Version 3.20</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
