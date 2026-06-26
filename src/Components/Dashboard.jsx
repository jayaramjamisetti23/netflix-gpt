import React from 'react';
import Header from './Header';
import Config from '../Config.js/configImages';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/");
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <Header />
      <div className="absolute inset-0">
        <img
          src={Config.netflixBodyImg}
          alt="Netflix Body"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to Netflix
        </h1>
        <p className="mt-4 text-lg text-gray-300 md:mt-6 md:text-2xl">
          Start browsing your favorite shows and movies.
        </p>
        <button
          type="submit"
          onClick={() => getStarted()}
          className="mt-3 cursor-pointer rounded-md bg-red-700 p-2 text-sm font-semibold text-white hover:bg-red-800 sm:my-4 sm:p-3 sm:text-base"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
