import React from 'react'


const Cards = ({ image, title,gradientColor }) => {
  return (
        <div className="group w-[280px]  h-[405px] rounded-[32px] bg-[#A98BEF] p-3 flex flex-col">
      
      {/* Image / Gradient Background */}
      <div
        className="relative flex-1 overflow-hidden rounded-[26px]"
        style={{
          background: `linear-gradient(
            to top,
            ${gradientColor} 0%,
            #ffffff 100%
          )`,
        }}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="h-[50px] flex items-center justify-center text-center text-white font-extrabold text-xl tracking-widest">
        {title}
      </h3>
    </div>
  )
}

export default Cards