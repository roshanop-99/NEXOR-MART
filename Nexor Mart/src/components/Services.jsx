import React from 'react'
import Scard from './Scard'

const services = [
  {
    id: 1,
    icon: 'delivery',
    title: "FAST DELIVERY",
    subtitle: "QUICK AND FAST DELIVERY",
  },
  {
    id: 2,
    icon: "packages",
    title: "EASY RETURNS",
    subtitle: "WITHIN 15 DAYS",
  },
  {
    id: 3,
    icon: "quality",
    title: "BEST QUALITY",
    subtitle: "BEST DRIP, BEST QUALITY",
  },
  {
    id: 4,
    icon: "security",
    title: "SECURE PAYS",
    subtitle: "100% SECURE PAYMENTS",
  },
];

const Services = () => {
  return (
    <section className='bg-[#6E5A9E] ' id="services">
        <div className='content flex flex-col items-center justify-center'>
            <div className="relative mt-12 ">

                    <h1 className=" text-[80px]  leading-none  absolute [-webkit-text-stroke:10px_#866BC5] text-transparent
                    ">OUR SERVICES</h1>
                    <h1 className="text-white text-[80px]  leading-none relative
                    ">OUR SERVICES</h1>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-8 max-w-2xl mx-auto mt-8">
  {services.map((service) => (
    <Scard
      key={service.id}
      icon={service.icon}
      title={service.title}
      subtitle={service.subtitle}
    />
  ))}
</div>
        </div>

        
    </section>

  )
}

export default Services