import './App.css';
import Banner from './Components/Banner';
import Movie from './Components/Movie';
import NavigationBar from './Components/NavigationBar';
import Watchlist from './Components/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [watchlist, setWatchList] = useState([]);

  const handleAddToWatchList = (movieObj) => {
    const newWatchList = [...watchlist, movieObj];
    setWatchList(newWatchList);
    console.log(newWatchList);
  }

  const handleRemoveFromWatchList = (movieObj) => {
    const filterWatchList = watchlist.filter((movie) =>{
      return movie.id != movieObj.id
  })
    setWatchList(filterWatchList)
    console.log(filterWatchList)
  }

  return (
    <>
    
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route
            path='/'
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
            path='/watchlist'
            element={<Watchlist
                watchlist={watchlist}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
