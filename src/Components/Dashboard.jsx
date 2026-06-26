import React from 'react';
import Header from './Header';
import Config from '../Config.js/configImages';

const Dashboard = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
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
      </div>
    </div>
  );
};

export default Dashboard;
