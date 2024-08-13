import React from 'react'

function Pagination({handlePrev,handleNext,pageNo}) {
  return (
    <div className='bg-slate-200 p-4 mt-8 flex justify-center rounded-lg'>
        <div onClick={handlePrev} className='px-8 hover:text-blue-400'><i className="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handleNext} className='px-8 hover:text-blue-400'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination