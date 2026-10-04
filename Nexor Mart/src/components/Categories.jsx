import React from 'react'
import Cards from './Cards'
import catMen from '../assets/cat-men.png'
import catWomen from '../assets/cat-women.png'
import accessories from '../assets/acccessories.png'


const categories = [
  {
    id: 1,
    title: "MEN’S COLLECTION",
    image: 'catMen',
    gradientColor: "#D3A25D",
  },
  {
    id: 2,
    title: "WOMEN’S COLLECTION",
    image: 'catWomen',
    gradientColor: "#D72C84",
  },
  {
    id: 3,
    title: "ACCESSORIES",
    image: 'accessories',
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