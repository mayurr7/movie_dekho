import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MovieDetails = () => {
    const movieData = useLoaderData();
    console.log(movieData);
    

  return (
    <>
        <div className='movie-details-container *:flex flex-col items-center justify-center p-10  *:rounded-lg shadow-lg *:max-w-3xl *:mx-auto'>
            <h1 className='movie-title'>{movieData.Title}</h1>
            <img src={movieData.Poster} alt={movieData.Title} className='movie-poster h-60' />
            <p className='movie-description'>{movieData.Plot}</p>
            <p className='movie-rating'>Rating: {movieData.imdbRating}</p>
            <p className='movie-release-date'>Release Date: {movieData.Released}</p>
            <p className='movie-genre'>Genre: {movieData.Genre}</p>
            <p className='movie-director'>Director: {movieData.Director}</p>
            <p className='movie-actors'>Actors: {movieData.Actors}</p>
        </div>
    </>
  )
}

export default MovieDetails
