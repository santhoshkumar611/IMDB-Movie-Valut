import React from 'react';

function MovieCard({ movieObj, poster_path, name, handleAddToWatchList, handleRemoveFromWatchList, watchlist }) {

  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true
      }
    }
    return false
  }

  return (
    <div
      className='h-[60vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end relative'
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})` }}>
      {
  doesContain(movieObj) ?
    (
      <div 
        onClick={()=>(handleRemoveFromWatchList(movieObj))}  
        className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-slate-200 text-rose-600'
      >
        {/* <i className="fa-sharp fa-solid fa-xmark"></i> */}
        
        &#10060;
      </div>
    ) :
    (
      <div 
        onClick={() => (handleAddToWatchList(movieObj))}  
        className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-slate-200 text-black'
      >
        {/* <i className="fa-sharp fa-solid fa-plus"></i> */}
        &#10133;
      </div>
    )
}

      <div className='absolute bottom-0 left-0 right-0 text-white text-xl w-full p-2 m-100 text-center bg-gray-900/60 rounded-xl text-xs'>
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
