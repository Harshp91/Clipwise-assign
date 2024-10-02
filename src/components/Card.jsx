import React from 'react'

const Card = () => {
  return (
    <div className='rounded-3xl flex bg-white flex-col items-center border-[#F3F2F3] border-2 p-4 hover:shadow-lg hover:border-none transition duration-200 ease-in-out text-center'>
        <img src='/assets/product.svg' />
        <p className='text-xl uppercase text-[#4F4F4F]'>Crystal Agate Phone Grip</p>
        <p className='text-xl font-bold text-[#317088]'>18.99$</p>
        <button className='text-sm p-4 rounded-2xl w-3/5 font-bold text-[#6FB4FF] my-4 border-4 border-[#6FB4FF] hover:text-white hover:p-5 hover:border-none hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] transition-colors ease-in-out duration-100'>BUY NOW</button>
    </div>
  )
}

export default Card
