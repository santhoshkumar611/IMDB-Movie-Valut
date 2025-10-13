import './App.css';
import Banner from './Components/Banner';
import Movie from './Components/Movie';
import NavigationBar from './Components/NavigationBar';
import Watchlist from './Components/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [watchlist, setWatchList] = useState([]);

  // Add movie to watchlist
  const handleAddToWatchList = (movieObj) => {
    const newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  // Remove movie from watchlist
  const handleRemoveFromWatchList = (movieObj) => {
    const filteredWatchList = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchList(filteredWatchList);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList));
    console.log(filteredWatchList);
  };

  // Load watchlist from localStorage
  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movie
                watchlist={watchlist}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              setWatchList={setWatchList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
