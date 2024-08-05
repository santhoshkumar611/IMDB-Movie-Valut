import React from 'react';

function MovieCard({ poster_path ,name}) {
  return (
    <div
      className='h-[60vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end relative'
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})` }} >
    <div className='absolute bottom-0 left-0 right-0 text-white text-xl w-full p-2 m-100 text-center bg-gray-900/60 rounded-xl  text-xs'>
      {name}
    </div>
    </div>
  );
}

export default MovieCard;
