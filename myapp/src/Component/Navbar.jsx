import React, { useState } from 'react'
import logo from "../assets/logo2.png"
import { FaBars } from "react-icons/fa"
import { LiaTimesSolid } from "react-icons/lia"

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const toggle = () => {
    setNav(!nav)
  }
  return (
    <div className='w-screen h-[80px] z-10 bg-[#fff] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-4xl font-bold mr-4 sm:text-3xl flex'><img src={logo} alt='logo' className='w-10 mr-2' />Cloud</h1>

          <ul className='hidden md:flex gap-7 font-bold text-2xl px-40'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-black text-white rounded-xl px-5 py-3 mr-4'>Login</button>
          <button className='border-none bg-black text-white rounded-xl px-5 py-3 mr-43'>Register</button>

        </div>
        <div className='md:hidden mr-4' onClick={toggle}>
          {!nav ? (<FaBars />) : (<LiaTimesSolid />)}

        </div>
      </div>
       <ul className={!nav ? "hidden" : "absolute bg-[#F9F9F9] w-[100%] px-8"} onClick={toggle}>
        <li className='border-b-2 py-3 border-blck-300 w-full'>Home</li>
        <li className='border-b-2 py-3 border-blck-300 w-full'>About</li>
        <li className='border-b-2 py-3 border-blck-300 w-full'>Support</li>
        <li className='border-b-2 py-3 border-blck-300 w-full'>Platform</li>
        <li className='border-b-2 py-3 border-blck-300 w-full'>Pricing</li>


        <div className='flex flex-col my-8'>
          <button className='border-none bg-black text-white px-8 py-3 mb-4 rounded-2xl'>Login</button>
          <button className='border-none bg-black text-white px-8 py-3 mb-4 rounded-2xl'>Register</button>

        </div>

      </ul>
    </div>
  ) 
}

export default Navbar
