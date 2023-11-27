import React from 'react'
import LogoImg from "../assets/img/QuickLogo.jpg"


const Footer = () => {
  return (
    <div className='absolute bottom-0 h-12 w-full border-t border-black/20 flex justify-center items-center'>
        <div className='flex'>
            <img src={LogoImg} alt="Logo" className='w-8 h-8'/>
            <h1 className='font-semibold tracking-tighter italic text-lg mt-2 text-red-500'>QuickCrave!</h1>
        </div>
        <h1 className='font-medium text-black/60 mt-2 ml-2'>created by </h1>
        
    </div>
  )
}

export default Footer