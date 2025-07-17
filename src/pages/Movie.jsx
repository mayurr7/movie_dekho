import React from 'react'
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../component/UI/MovieCard';

const Movie = () => {
  const movieData = useLoaderData();

  console.log(movieData);
  
  return (
    <ul className='movie-page flex flex-row flex-wrap gap-25 justify-center p-10'>
      {movieData.Search.map((currMovie) => {
        return <MovieCard key ={currMovie.imdbID} currMovie = {currMovie}/>
      })}
    </ul>
  )
}

export default Movie
