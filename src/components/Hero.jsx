import React from 'react'

const Hero = () => {
  return (
    <div className=' relative top-14 z-10 '>
      <div>
        <h2 className='mb-2 text-center text-4xl font-bold pt-20'>Model Y</h2>
        <h3 className='text-center text-xl font-bold'>From $39,390*</h3>
        <p className='text-center text-xs text-gray-600 '>After Federal Tax Credit & Est. Gas Savings</p>
      </div>

        <div className='flex gap-10   justify-center mt-72'>
          <div className='bg-zinc-700 text-white px-10 py-2 rounded mt-28 w-1/6 text-center hover:cursor-pointer'>Custom Order</div>
          <div className='bg-white bg-opacity-40 text-gray-900 px-10 py-2 rounded mt-28 w-1/6 text-center hover:cursor-pointer'>Learn more</div>
        </div>
        <p className='text-xs text-center pt-5 text-zinc-900 '>*Price before incentives and savings is $50,490, excluding taxes and fees. Subject to change.</p>
        <p className='text-center underline underline-offset-4 text-xs text-zinc-900 '>Learn about est. gas savings.</p>
    </div>
  )
}

export default Hero