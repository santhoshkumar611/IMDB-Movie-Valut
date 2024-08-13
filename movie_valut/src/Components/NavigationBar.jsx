import React from 'react';
import logo from '../assets/Movie_logo2.png';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className='flex space-x-6 items-center pl-6 py-3 mx-0  shadow-md mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300'>
        <img className='w-14 h-14 border-4 border-gradient-to-r from-teal-400 to-blue-600 p-2 rounded-full' src={logo} alt="Logo" />
        <nav className='flex-1'>
          <Link 
            to="/" 
            className='text-xl font-medium text-black uppercase tracking-wider transition-transform transform hover:scale-105 hover:text-blue-500'
          >
            Movies
          </Link>
          <Link 
            to='/watchlist' 
            className='ml-6 text-xl font-medium text-black uppercase tracking-wider transition-transform transform hover:scale-105 hover:text-blue-500'
          >
            Watchlist
          </Link>
        </nav>
    </div>
  );
}

export default NavigationBar;
