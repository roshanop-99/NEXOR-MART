import React from 'react'
import delivery from '../assets/Expressdelivery.png'
import quality from '../assets/Quality.png'
import security from '../assets/Security.png'
import packages from '../assets/Package.png'

const Scard = ({ icon, title, subtitle }) => {
  return (
    <div className="w-[300px] h-[122px] rounded-[16px] bg-[#A98BEF] flex items-center px-6 gap-5 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-purple-900/40 cursor-pointer">
      
      
      <div className="w-[70px] h-[70px] flex items-center justify-center shrink-0">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      
      <div className="flex flex-col">
        <h3 className="text-white tracking-wider text-[22px] font-extrabold leading-none">
          {title}
        </h3>

        <p className="text-white tracking-widest text-[12px] font-bold mt-2">
          {subtitle}
        </p>
      </div>

    </div>
  )
}

export default Scard