import React from 'react'

const Carousel = () => {
  return (
    <div className='flex justify-between items-center m-12'>
      <img src='/assets/left.svg' />
      <div className='rounded-full h-[14px] w-[14px] bg-[#8B93E4]'></div>
      <div className='rounded-full h-[14px] w-[14px] bg-[#D7DBFF]'></div>
      <div className='rounded-full h-[14px] w-[14px] bg-[#D7DBFF]'></div>
      <div className='rounded-full h-[14px] w-[14px] bg-[#D7DBFF]'></div>
      <div className='rounded-full h-[14px] w-[14px] bg-[#D7DBFF]'></div>
      <div className='rounded-full h-[14px] w-[14px] bg-[#D7DBFF]'></div>
      <div className='rounded-full h-[14px] w-[14px] bg-[#D7DBFF]'></div>
      <img src='/assets/right.svg' />
    </div>
  )
}

export default Carousel
