import React, { useState} from 'react'
import { FaHouseUser, FaUser, FaEnvelope, FaCartArrowDown, FaSourcetree} from "react-icons/fa";
import Logo from './Logo';

const Header = () => {

  const [loggedState, setLoggedState]=useState("Login");

  return (
    <div className='flex justify-between px-8 py-4 shadow-md'>
        <Logo/>
        <ul className='flex gap-4 text-lg font-semibold mt-6'>
            <li className='navlist'><FaHouseUser className='mt-1'/>Home</li>
            <li className='navlist'><FaSourcetree className='mt-1'/>About</li>
            <li className='navlist'><FaEnvelope className='mt-1'/>Contact</li>
            <li className='navlist'><FaCartArrowDown className='mt-1'/>Cart</li>
        </ul>
        <button className='flex gap-2 px-4 py-2 my-3 w-28 rounded-md bg-red-500 text-white font-semibold'
                onClick={()=>{loggedState==="Login"?setLoggedState("Logout"):setLoggedState("Login")}}>
            <FaUser className='mt-1'/>{loggedState}
        </button>
    </div>
  )
}

export default Header