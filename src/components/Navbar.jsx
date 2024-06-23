import React from 'react';
import logo from "../assets/DuoPlayLogo.png"

function Navbar() {
  return (
    <div className='w-full py-2 px-10   bg-[#0b6582] bg-opacity-40 flex items-center justify-between '>
      <div className=''><img className='bg-cover w-10 h-10 rounded-lg' src={logo} alt="" /></div>
      <div className='bg-[#45cce9] rounded-xl p-1 px-2 font-tilt-font'><span><i class="fa-solid fa-magnifying-glass"></i></span>  <input className='rounded-xl text-center border-none p-1 px-2' type="Search" placeholder='Search for Games...'  /> </div>
      <button className='bg-[#45cce9] rounded-xl py-1 px-2 font-tilt-font hover:bg-[#87d8e9] hover:scale-95 duration-500'>Log in</button>
    </div>
  )
}

export default Navbar
