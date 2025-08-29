import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ currMovie }) => {
  if (!currMovie) return null;
  const { Poster, imdbID } = currMovie;

  return (
    <>
      <li className="hero-container flex flex-col items-center justify-start w-60 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="main-container flex flex-col  ">
          <div className="poster-container h-80 w-full ">
            <img
              src={currMovie.Poster}
              alt={currMovie.Title}
              className="movie-poster"
            />
          </div>
          <div className="pt-12 text-center">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="text-xl text-black font-bold cursor-pointer">
                Watch Now
              </button>
            </NavLink>
          </div>
        </div>
      </li>
    </>
  );
};

export default MovieCard;
