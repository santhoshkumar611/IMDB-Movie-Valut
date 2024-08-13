import './App.css';
import Banner from './Components/Banner';
import Movie from './Components/Movie';
import NavigationBar from './Components/NavigationBar';
import Watchlist from './Components/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App(name, poster_path) {
  const [watchlist, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp' ,JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log(newWatchList);
  }

  let handleRemoveFromWatchList = (movieObj) => {
    let filterWatchList = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchList(filterWatchList);
    localStorage.setItem('moviesApp', JSON.stringify(filterWatchList));
    console.log(filterWatchList);
  }
  

  useEffect(()=>{
    let moviesFromLocalStroage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStroage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStroage))
  },[])

  return (
    <>
    
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route
            path='/'
            element={
              <>
              <Banner/>
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
                setWatchList={setWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
