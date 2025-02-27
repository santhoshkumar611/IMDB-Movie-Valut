import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

function Movie({ handleAddToWatchList, handleRemoveFromWatchList, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b549b318c0af5d72821175d4d558b694&language=en-US&page=${pageNo}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      });
  }, [pageNo]);
  

  return (
    <div className='p-5 '>
      <div className='text-2xl m-5 text-center font-bold'>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
        {movies.map((movieObj) => {
          return <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
            name={movieObj.original_title}
            handleAddToWatchList={handleAddToWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
            watchlist={watchlist}
          />
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
        isPrevDisabled={pageNo === 1}       />
    </div>
  );
}

export default Movie;
