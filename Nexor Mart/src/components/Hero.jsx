import React from 'react'
import Navbar from './Navbar'
import heroImg from '../assets/hero-img.png'


const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#866BC5] ">
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.3),transparent_60%)] z-0" />
        <div className="main-content flex items-center justify-center flex-col relative z-10">
            <Navbar />

            <div className="headings flex flex-col items-center gap-0 mt-2">
                <div className="relative">
                    <h2 className=" text-[90px] leading-none [-webkit-text-stroke:10px_#6E5A9E] text-transparent absolute">REDEFINE</h2>
                    <h2 className="text-white text-[90px] leading-none relative">REDEFINE</h2>
                </div>

                <div className="relative -mt-15 ">
                    <h1 className=" text-[450px] leading-none  absolute [-webkit-text-stroke:22px_#6E5A9E] text-transparent
                    ">FASHION</h1>
                    <h1 className="text-white text-[450px] leading-none relative
                    ">FASHION</h1>
                </div>
            </div>

            
            <div className="character  absolute left-1/2 -translate-x-1/2 top-80">
                <div className="relative">
                    <div className="image relative z-20">
                        
                        <img className='w-97 h-auto cursor-pointer' src={heroImg} alt="hero" />
                    </div>

                    

                    <div className="badge1 px-4 py-3 absolute -right-2 -translate-x-1/4 top-60 text-white text-2xl bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl rotate-4 tracking-wide shadow-xl/15 z-10 text-center">
                        <p className='outline-none'>🥰</p>
                    </div>

                </div>
            </div>

        </div>

        <div className="absolute inset-0 bg-linear-to-t from-[#6E5A9E]/85 via-transparent to-transparent z-30  pointer-events-none"></div>

        <div className="badge1 px-4 py-3 absolute left-175 -translate-x-1/7 top-165 text-white text-2xl bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl -rotate-3 tracking-wide shadow-xl/30 z-50">
                        <p className='text-shadow-lg/15'>GEN-Z CODED 🔥</p>
                    </div>
        <div className="badge1 px-4 py-3 absolute right-150 -translate-x-1/7 top-195 text-white text-2xl bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl rotate-3 tracking-wide shadow-xl/30 z-50">
                        <p className='text-shadow-lg/15'><span class="num">24/7</span> SUPPORT</p>
                    </div>
        
    </section>
  )
}

export default Hero