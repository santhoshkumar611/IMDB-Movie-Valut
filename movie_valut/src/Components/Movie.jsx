import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

function Movie() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev =()=>{
    if(pageNo==1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
  }
  const handleNext =()=>{
    setPageNo(pageNo+1)
  }







  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b549b318c0af5d72821175d4d558b694&language=en-US&page=${pageNo}`)
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 text-center font-bold'>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            poster_path={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
            name={movieObj.original_title}
          />
        ))}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

export default Movie;
