import React from 'react'

function Watchlist({watchlist}) {
  return (
    <>
      <div className=' flex justify-center flex-wrap m-4 '>
        <div className='bg-blue-400  items-center flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4'>Action</div>
        <div className='bg-gray-400/50  items-center flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold'>Action</div>
      </div>


    <div className='flex justify-center my-4'>
      <input type="text"  placeholder='search movies'className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 rounded-lg flex justify-center items-center'/>
    </div>

    <div className=' overflow-hidden rounded-lg border broder-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Geners</th>
          </tr>
        </thead>
        <tbody>


          {watchlist.map((movieObj)=>{
            return <tr className='border-b-2'>
            <td className='flex items-center px-6 py-4'>
              <img className='h-[6rem] w-[10rem]' src={'https://image.tmdb.org/t/p/w500${movieObj.poster_path}'} alt="" />
            <div className='mx-10'>Black Panther</div>
            </td>
              <td>8.5</td>
              <td>9</td>
              <td>Action</td>
              <td className='text-red-600'>Delete</td>
            </tr>
          })}
            
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Watchlist