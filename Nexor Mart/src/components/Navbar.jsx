import React from 'react'
import shoppingBagIcon from '../assets/shopping-bag 2.png';
import profileIcon from '../assets/PROFILE.png';

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between pl-4 pr-4 mt-8 w-400 bg-[#F6F2F2] h-12 rounded-full text-[#4E3E7C] text-xl">
        <div className="flex gap-4 items-center">
          <a href="#">Home</a>
          <a href="#trending">Trends</a>
          <a href="#categories">Categories</a>
        </div>

        <div className="center-logo absolute  left-1/2 -translate-x-1/2 text-3xl font-extrabold">
          <a href="#">NEXOR</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#about">About</a>
          <a href="#about">Contact</a>
          <button className='scale-65 cursor-pointer'><img src="../src/assets/shopping-bag 2.png" alt="" /></button>
          <button className='scale-65 cursor-pointer'><img src="../src/assets/PROFILE.png" alt="" /></button>
        </div>
    </nav>
  )
}

export default Navbar