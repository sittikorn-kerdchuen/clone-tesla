import React from 'react'

const Heropage = () => {
  return (
    <div className=' relative -top-16 z-10 '>
      <div>
        <h2 className=' text-center text-[2.4rem]  font-bold pt-20 text-white'>Model 3</h2>
        <h3 className='text-center text-xl font-bold text-white'>From $39,390*</h3>
        <p className='text-center text-xs text-gray-600 text-white'>After Federal Tax Credit & Est. Gas Savings</p>
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

export default Heropage