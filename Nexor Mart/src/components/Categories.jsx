import React from 'react'
import Cards from './Cards';


const categories = [
  {
    id: 1,
    title: "MEN’S COLLECTION",
    image: "../src/assets/cat-men.png",
    gradientColor: "#D3A25D",
  },
  {
    id: 2,
    title: "WOMEN’S COLLECTION",
    image: "../src/assets/cat-women.png",
    gradientColor: "#D72C84",
  },
  {
    id: 3,
    title: "ACCESSORIES",
    image: "../src/assets/acccessories.png",
    gradientColor: "#4048E3",
  },
];


const Categories = () => {
  return (
    <section className='bg-[#6E5A9E]' id='categories'>
        <div className='content flex flex-col items-center justify-center'>

            <div className="relative mt-12 ">

                    <h1 className=" text-[80px]  leading-none  absolute [-webkit-text-stroke:10px_#866BC5] text-transparent
                    ">Categories</h1>
                    <h1 className="text-white text-[80px]  leading-none relative
                    ">Categories</h1>

            </div>

            <div className="cards flex gap-9 items-center justify-center mt-7">
                {categories.map((category) => (
                        <Cards
                        key={category.id}
                        image={category.image}
                        title={category.title}
                        gradientColor={category.gradientColor}
                        />
                    ))}
            </div>

        </div>

    </section>
  )
}

export default Categories