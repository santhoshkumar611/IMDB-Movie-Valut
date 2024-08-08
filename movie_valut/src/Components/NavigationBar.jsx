import React from 'react'
import logo from '../assets/Movie_logo2.png'
import { Link } from 'react-router-dom'
const NavigationBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img  className='w-[50px]'src={logo} alt="" />
        <Link to="/" className='text-blue-500 text-2xl font-bold '>Movies</Link>
        <Link to='/watchlist' className='text-blue-500 text-2xl font-bold '>Watch list</Link>
    </div>
  )
}

export default NavigationBar