import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-blue-700 to-purple-800 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg text-center">
        Welcome to <span className="text-pink-400">Movie Dekho</span>
      </h1>
      <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-xl text-center">
        Discover, explore, and enjoy your favorite movies. Dive into a world of entertainment curated just for you!
      </p>
      <button
        onClick={() => navigate('/movie')}
        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200"
      >
        Explore Movies
      </button>
    </div>
  )
}

export default Home
