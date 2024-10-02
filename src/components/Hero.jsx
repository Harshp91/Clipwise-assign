import React from 'react'
import Card2 from './Card2'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <section className='relative text-white mt-48 z-10 flex flex-col justify-center items-center'>
        <div className='flex justify-between mx-36 items-center gap-16'>
            <div>
                <p className='text-4xl'>Welcome to</p>
                <h1 className='text-6xl font-bold'>Pop Rock Crystal Shop!</h1>
                <p className='text-lg mt-8 w-[444px] text-[#31546D]'>
                Here you will find unique phone accessories, crystals, jewelry and more. 
                Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
                </p>
            </div>
            <div className='flex flex-col'>
                <Card2 />
                <Carousel />
            </div>
        </div>
        <div className='m-20 flex justify-center items-center gap-4'>
            <img src='/assets/mouse.svg' />
            <p className='text-[#317189] font-bold'>scroll down</p>
        </div>
    </section>
  )
}

export default Hero
