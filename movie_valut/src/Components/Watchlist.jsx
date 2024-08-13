import React, { useEffect, useState } from 'react'
import genreids from '../Utility/genre'

function Watchlist({watchlist, setWatchList , handleRemoveFromWatchList}) {
  
  const[search,setSearch]= useState('')
  const[genreList,setGenreList]= useState(['All Generes'])
  const[currGenre , setCurrGenre]= useState('All Genres')

  let handleSearch =(e)=>{
    setSearch(e.target.value)
  }
  let handleFilter = (genre)=>{
    setCurrGenre(genre)
  }
  let sortIncreasing=()=>{
   let sortedIncreasing= watchlist.sort((movieA , movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncreasing])
  }
  let sortdecreasing=()=>{
   let sortedDecreasing= watchlist.sort((movieA , movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  },[watchlist])

  return (
    <>

      <div className=' flex justify-center flex-wrap m-4 '>
        {genreList.map((genre)=>{
       return <div onClick={()=>handleFilter(genre)}className={currGenre == genre
        ? "bg-red-700 items-center flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4 "
        : "bg-gray-700/50 items-center flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold  mx-4"}>
          {genre}
        </div>

        })}
      </div>


    <div className='flex justify-center my-4'>
      <input onChange={handleSearch} value={search} type="text"  placeholder='search movies'className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 rounded-lg flex justify-center items-center'/>
    </div>

    <div className=' overflow-hidden rounded-lg border broder-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th className='flex justify-center'>
              <div className='p-2' onClick={sortIncreasing}> <i class="fa-solid fa-arrow-up"></i> </div>
              <div className='p-2'>Ratings</div>
             <div className='p-2' onClick={sortdecreasing}> <i class="fa-solid fa-arrow-down"></i></div>
            </th>
            <th>Popularity</th>
            <th>Geners</th>
          </tr>
        </thead>
        <tbody>


          {watchlist.filter((movieObj)=>{
            if(currGenre=='All Genres'){
              return true
            }else{
              return genreids[movieObj.genre_ids[0]]==currGenre
            }
          }).filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj)=>{
            return <tr className='border-b-2'>
            <td className='flex items-center px-6 py-4'>
              <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`} alt="" />
            <div className='mx-10 text-white'>{movieObj.title}</div>
            </td>
              <td className='text-yellow-500'>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td >{genreids[movieObj.genre_ids[0]]}</td>


              <td onClick={()=>handleRemoveFromWatchList(movieObj)} className='text-red-500'>Delete</td>
            </tr>
          })}
            
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Watchlist