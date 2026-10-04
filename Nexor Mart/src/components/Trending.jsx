import React from 'react'
import Bento from './Bento'

const Trending = () => {
  return (
    <section className=' bg-[#6E5A9E]' id='trending'>

        <div className="content flex flex-col items-center justify-center">

            <div className="relative mt-12 ">

                    <h1 className=" text-[80px]  leading-none  absolute [-webkit-text-stroke:10px_#866BC5] text-transparent
                    ">TRENDING NOW 🔥</h1>
                    <h1 className="text-white text-[80px]  leading-none relative
                    ">TRENDING NOW 🔥</h1>

            </div>
            
        </div>
        <div className='mt-6'>
                <Bento />
            </div>
    </section>
  )
}

export default Trending