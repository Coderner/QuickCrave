import React from 'react'
import SpecialitiesCard from './SpecialitiesCard'

const Specialities = () => {
  return (
    <div className='py-4  text-black/80'>
      <h1 className='text-4xl font-medium mb-2'>Book an appointment for an in-clinic consultation</h1>
      <h6 className='text-xl font-[450] mb-4'>Find experienced doctors accross all specialities</h6>
      <SpecialitiesCard/>
    </div>
  )
}

export default Specialities