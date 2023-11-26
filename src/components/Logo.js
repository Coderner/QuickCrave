import React from 'react'
import LogoImg from '../assets/img/QuickLogo.jpg'

const Logo = () => {
  return (
    <div className='flex'>
            <img src={LogoImg} alt="Logo" className='w-16 h-16'/>
            <h1 className='font-semibold tracking-tighter italic text-3xl mt-4 text-red-500'>QuickCrave!</h1>
    </div>
  )
}

export default Logo