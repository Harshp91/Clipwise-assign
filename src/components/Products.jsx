import React from 'react'
import Card from './Card'

const Products = () => {
    const arr = [1,2,3,4,5,6,7,8]
  return (
    <section className='flex flex-col mt-8 absolute'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[#31546D] text-5xl font-semibold'>All Products</h1>
            <hr class="border-t-4 rounded-2xl border-[#F2F2F2] w-24  mt-4"></hr>
        </div>
        <div className='flex mx-16 gap-16'>
            <div className='flex gap-2 font-semibold'>
                <span className='text-[#9AB0C0]'>Filter:</span>
                <span className='text-[#31546D] flex gap-1 items-center justify-center'>All Products <img src='/assets/arrow.svg' /></span>
            </div>
            <div className='flex gap-2 font-semibold'>
                <span className='text-[#9AB0C0]'>Sort:</span>
                <span className='text-[#31546D] flex gap-1 items-center justify-center'>Best Selling <img src='/assets/arrow.svg' /></span>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-4 mx-16 mt-8'>
            {arr.map((i) =>(
                <Card key={i} />
            ))}
        </div>
        <button className='text-sm mx-auto p-4 rounded-2xl w-[120px] font-bold text-[#6FB4FF] my-12 border-2 border-[#6FB4FF] hover:text-white hover:p-[17.5px] hover:border-none hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] transition-colors ease-in-out duration-100'>View</button>
    </section>
  )
}

export default Products
