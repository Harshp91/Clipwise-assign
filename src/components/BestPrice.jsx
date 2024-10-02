import React from 'react'

const BestPrice = () => {
  return (
    <section className='relative top-[1200px]'>
        {/* SVG Background */}
        <svg className="absolute inset-0 z-0" viewBox="0 0 1440 604" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z" fill="#76DCF6"/>
        </svg>

        {/* Content on top of SVG */}
        <div className='relative flex justify-between items-center px-44 gap-20 mb-20 z-10'>
            <div className='text-[#31546D] flex flex-col text-end space-y-4 w-1/2'>
                <p className='uppercase text-4xl'>Best Price</p>
                <p className='text-6xl font-bold'>Agate Phone Grip</p>
                <p>
                    <span className='text-lg text-[#41A0B7] line-through mx-4'>44.50$</span>
                    <span className='text-6xl font-bold text-[#E35B3E]'>19.50$</span>
                </p>
                <p className='text-[#31546D] w-3/5 text-sm ml-auto'>
                    These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! 
                    Just gently squeeze the sides to remove and swap out with another color or design!
                </p>
                <button className='text-sm bg-white ml-auto text-center p-4 rounded-2xl w-[200px] font-bold text-[#6FB4FF] my-12 border-2 border-[#6FB4FF] hover:text-white hover:p-[17.5px] hover:border-none hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] transition-colors ease-in-out duration-100'>BUY NOW</button>
            </div>
            <div>
                <div className='bg-white shadow-2xl rounded-full p-24'>
                    <div className='bg-white shadow-2xl rounded-full p-24 text-center'>
                        <img src='/assets/product.svg' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BestPrice
