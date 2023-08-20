import React from 'react';
// import startImage from './Start.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const Start = () => {

  return (
    <div className=" hover:bg-startImage relative focus:bg-startImage bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center bg-[url('/mobileimg.png')] md:bg-[url('/Start.png')]">
      <div className='flex w-full md:justify-end'>
        <div className="text-center md:w-1/2 flex flex-col items-center gap-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Diary App</h1>
            <p className="text-lg sm:text-xl lg:text-3xl text-gray-700 mb-6">Start documenting your life's moments.</p>
            <Link
            className="px-6 py-3 text-white w-3/4 bg-[#9338e4] rounded hover:bg-purple-500 text-lg sm:text-xl lg:text-2xl"
            to={'/register'}
            >
            Start Your Free Journal Now
            </Link>

      </div>
      </div>
      
      
      
      <div className="absolute md:top-15 right-14 mt-4 mr-10 md:mr-4 top-28">
        <Link className="px-4 py-2 text-white text-lg bg-[#9338e4] rounded hover:bg-purple-600 mr-2 sm:text-base lg:text-lg" to={"/login"}>Login</Link>
        <Link className="px-4 py-2 text-purple-500 bg-transparent border border-purple-900 rounded hover:text-white hover:bg-[#9338e4] text-sm sm:text-base lg:text-lg" to={"/register"}>Sign Up</Link>
      </div>
      <div className="h-40 sm:h-32 md:h-34 lg:h-48 xl:h-50"></div>
    </div>
  );
};

export default Start;

