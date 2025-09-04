import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 via-blue-700 to-blue-900 px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-400 mb-4 drop-shadow-lg text-center">
          About <span className="text-white">Movie Dekho</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-4 text-center">
          Movie Dekho is your gateway to discovering, exploring, and enjoying the
          world of cinema. Our platform is designed to bring you the latest and
          greatest movies, personalized recommendations, and a seamless browsing
          experience.
        </p>
        <ul className="text-blue-200 text-base md:text-lg mb-4 list-disc list-inside text-left">
          <li>Browse trending and classic movies</li>
          <li>Get detailed information and reviews</li>
          <li>Save your favorites for later</li>
        </ul>
        <p className="text-blue-200 text-center">
          Whether you are a casual viewer or a movie buff, Movie Dekho is made
          for you!
        </p>
      </div>
    </div>
  );
};

export default About;
