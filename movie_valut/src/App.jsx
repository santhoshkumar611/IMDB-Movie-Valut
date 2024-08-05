import './App.css';
import Banner from './Components/Banner';
import Movie from './Components/Movie';
import NavigationBar from './Components/NavigationBar';
import Watchlist from './Components/Watchlist';
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>

    <NavigationBar/>

    <Routes>
      <Route path='/'element={<> <Banner/> <Movie/>  </>}/>
      <Route path='/watchlist'element={<Watchlist/>}/>
  
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App

