import React from 'react'
import Hero from './Hero'
// video
import video from '/src/video/Model-3-Main-Hero-Video-Desktop-NA.mp4'

const HeadPage = () => {
    return (

        <div className='h-screen relative -z-10 -top-32 mt-2 overflow-hidden border-black border-2'>
            <video src={video} autoPlay loop muted className='bg-center relative -top-16 w-full'>
            </video>
            <Hero />
        </div>

    )
}

export default HeadPage