import React from 'react'

const About = () => {
  return (
    <section  className='bg-[#6E5A9E] ' id='about'>
        <div className="main flex flex-col items-center justify-center">
            <div className="relative mt-12 ">

                    <h1 className=" text-[80px]  leading-none  absolute [-webkit-text-stroke:10px_#866BC5] text-transparent
                    ">ABOUT US</h1>
                    <h1 className="text-white text-[80px]  leading-none relative
                    ">ABOUT US</h1>
            </div>

            <div className="ab-content w-full max-w-[670px] min-h-[360px] mx-auto mt-8 mb-16 p-8 rounded-[30px] flex items-center justify-center text-white text-center text-lg bg-[#A98BEF] tracking-wider">
                Nexor Mart is a fashion store built for Gen Z, by people who actually get it. Everything we sell is premium, and every piece is quality-checked before it reaches you, so no mid fits and nothing falling apart after two washes. We keep our drops fresh and on trend, ship quick, keep payments 100% secure, and offer easy returns within 15 days. Best drip, best quality. Own your style 💜

            </div>

        </div>
    </section>
  )
}

export default About