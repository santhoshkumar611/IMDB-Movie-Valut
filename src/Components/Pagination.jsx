import React from 'react'

function Pagination({handlePrev,handleNext,pageNo}) {
  return (
    <div className='bg-slate-200 p-4 mt-8 flex justify-center rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-red-900'>
        <div onClick={handlePrev} className='px-8 text-white hover:text-red-700'><i className="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold text-yellow-500'>{pageNo}</div>
        <div onClick={handleNext} className='px-8 text-white hover:text-red-700'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination