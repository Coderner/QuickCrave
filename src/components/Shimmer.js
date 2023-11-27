import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap px-6 py-8 justify-evenly'>
        {
           Array(10).fill("").map((e,index)=>(
              <div key={index} className='h-52 w-44 m-6 bg-gray-100 shadow-sm rounded-sm'></div>
          ))
        }
    </div>
  )
}

export default Shimmer