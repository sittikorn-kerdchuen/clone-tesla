import React from 'react'
import Hero from './Hero'

const HeadPage = () => {
    return (

        <div className='h-screen relative -z-10 -top-22'>
            <video src="./src/video/Model-3-Main-Hero-Video-Desktop-NA.mp4" autoPlay loop muted className='bg-center relative -top-16 w-full'>
            </video>
            <Hero />
        </div>

    )
}

export default HeadPage