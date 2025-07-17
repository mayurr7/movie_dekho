import React from 'react';
import { useRouteError, Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
//   console.error(error);

const navigate = useNavigate();

const handleBack = () => {
  navigate(-1);
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="mb-6 text-gray-400">
          {error.statusText || error.message || "The page you're looking for doesn't exist or an error occurred."}
        </p>

        {/* <Link
          to="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Go Back Home
        </Link> */}

        <button className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition cursor-pointer" onClick={handleBack} >Back</button>
      </div>
    </div>
  );
};

export default ErrorPage;
