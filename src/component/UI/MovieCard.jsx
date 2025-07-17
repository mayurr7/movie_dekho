import React from 'react'

const MovieCard = ({currMovie}) => {
    if (!currMovie) return null;

  return (
   <>
    <li className='hero-container flex flex-col items-center justify-start w-60 bg-white shadow-md rounded-lg overflow-hidden'>
      <div className='main-container flex flex-col  '>
        <div className='poster-container h-80 w-full '>
        <img src={currMovie.Poster} alt={currMovie.Title} className='movie-poster' />

        </div>
        <div className="pt-12 text-center">
       <button className='text-xl text-black font-bold cursor-pointer'>Watch Now</button>
      </div>

        </div>
        </li>
   </>
  )
}

export default MovieCard
