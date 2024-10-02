import React from 'react'

const Card2 = () => {
  return (
    <div className='bg-white rounded-3xl shadow-2xl flex z-10'>
        <p className='p-2 bg-[#8A93E5] mt-16 w-24 h-10 text-white rounded-r-lg'>New Lot</p>
        <div className='flex flex-col'>
            <img src='/assets/product.svg' height='362px' width='362px' />
            <p className='uppercase text-[#808180] my-8'>
                Crystal Agate Phone Grip 
                <span className='text-[#317088] font-bold'> - 18.99$</span>
            </p>
        </div>
    </div>
  )
}

export default Card2
