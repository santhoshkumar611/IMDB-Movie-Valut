import React from 'react'

const Banner = () => {
  return (
    <div className='h-[40vh] md:h-[75vh] bg-cover bg-centre flex items-end'style={{backgroundImage : 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U0rNKU5G8IQ-TVY5Byb3eUJKEzlTHs3EEw&s)'}}>
        <div className='text-white text-2xl text-center w-full bg-gray-900/60 p-4'> Avengers Endgame</div>
    </div>
  )
}

export default Banner