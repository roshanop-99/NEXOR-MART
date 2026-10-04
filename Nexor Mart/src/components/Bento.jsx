import React from 'react'
import models from '../assets/trending-models.png'
import cap from '../assets/cap.png'
import benie from '../assets/benie.png'
import glasses from '../assets/glasses.png'



const Bento = () => {
  return (
  <div className="w-full max-w-6xl mx-auto px-6">

      <div className="grid grid-cols-[1.2fr_1fr] gap-6 h-[600px]">

        {/* BIG LEFT CARD */}
        <div className="group rounded-[32px] bg-[#a98be8] p-3">
          <div className="relative h-full overflow-hidden rounded-[24px] bg-[#e8cfd6]">

            <img
              src={models}
              alt="FASHION"
              className="w-full h-full object-cover"
            />

            {/* HOVER OVERLAY */}
            <div className="
              absolute inset-x-0 bottom-0 h-1/2
              bg-gradient-to-t
              from-[#6E5A9E]
              via-[#6E5A9E]/60
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
              pointer-events-none
            " />

            {/* HOVER TEXT */}
            <div className="
              absolute bottom-6 left-6 right-6
              opacity-0
              translate-y-3
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all duration-300
            ">
              <h3 className="text-2xl font-bold tracking-wider text-white">
                Relaxed Summer Look
              </h3>

              <p className="mt-1 text-sm tracking-wider text-white/80">
                Lightweight layers with a clean and effortless silhouette.
              </p>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="grid grid-rows-[280px_1fr] gap-6 min-h-0">

          {/* CAP */}
          <div className="group rounded-[32px] bg-[#a98be8] p-3">
            <div className="relative h-full overflow-hidden rounded-[24px] bg-[#eee] flex items-center justify-center">

              <img
                src={cap}
                alt="CAP"
                className="w-[70%] h-[70%] object-contain"
              />

              {/* HOVER OVERLAY */}
              <div className="
                absolute inset-x-0 bottom-0 h-1/2
                bg-gradient-to-t
                from-[#6E5A9E]
                via-[#6E5A9E]/60
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
                pointer-events-none
              " />

              {/* HOVER TEXT */}
              <div className="
                absolute bottom-5 left-5 right-5
                opacity-0
                translate-y-3
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-300
              ">
                <h3 className="text-xl tracking-wider font-bold text-white">
                  Classic Black Cap
                </h3>

                <p className="mt-1 text-sm tracking-wider text-white/80">
                  Minimal design with a clean curved brim.
                </p>
              </div>

            </div>
          </div>


          {/* BOTTOM TWO */}
          <div className="grid grid-cols-2 gap-6 min-h-0">

            {/* BEANIE */}
            <div className="group rounded-[32px] bg-[#a98be8] p-3">
              <div className="relative h-full overflow-hidden rounded-[24px] bg-white flex items-center justify-center">

                <img
                  src={benie}
                  alt="BEANIE"
                  className="w-[90%] h-[90%] object-contain"
                />

                {/* HOVER OVERLAY */}
                <div className="
                  absolute inset-x-0 bottom-0 h-1/2
                  bg-gradient-to-t
                  from-[#6E5A9E]
                  via-[#6E5A9E]/60
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                " />

                {/* HOVER TEXT */}
                <div className="
                  absolute bottom-5 left-5 right-5
                  opacity-0
                  translate-y-3
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all duration-300
                ">
                  <h3 className="text-xl tracking-wider font-bold text-white">
                    Rust Knit Beanie
                  </h3>

                  <p className="mt-1 text-xs tracking-wider text-white/80">
                    Ribbed knit texture with a relaxed fit.
                  </p>
                </div>

              </div>
            </div>


            {/* SUNGLASSES */}
            <div className="group rounded-[32px] bg-[#a98be8] p-3">
              <div className="relative h-full overflow-hidden rounded-[24px] bg-white flex items-center justify-center">

                <img
                  src={glasses}
                  alt="SUNGLASSES"
                  className="w-[90%] h-[90%] object-contain"
                />

                {/* HOVER OVERLAY */}
                <div className="
                  absolute inset-x-0 bottom-0 h-1/2
                  bg-gradient-to-t
                  from-[#6E5A9E]
                  via-[#6E5A9E]/60
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                " />

                {/* HOVER TEXT */}
                <div className="
                  absolute bottom-5 left-5 right-5
                  opacity-0
                  translate-y-3
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all duration-300
                ">
                  <h3 className="text-lg tracking-wider font-bold text-white">
                    Classic Aviators
                  </h3>

                  <p className="mt-1 text-xs tracking-wider text-white/80">
                    Timeless frames for an effortless finish.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
  
}

export default Bento