import React from 'react'
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage'


const TestScolling = () => {

    const style = {
        height : '100vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    return (
        <Fullpage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection style={style}>
                        <h1 className='text-5xl'>Screen : 1</h1>
                </FullpageSection>

                <FullpageSection style={style}>
                        <h1 className='text-5xl'>Screen : 2</h1>
                </FullpageSection>

                <FullpageSection style={style}>
                        <h1 className='text-5xl'>Screen : 3</h1>
                </FullpageSection>
                
                <FullpageSection style={style}>
                        <h1 className='text-5xl'>Screen : 1</h1>
                </FullpageSection>

                <FullpageSection style={style}>
                        <h1 className='text-5xl'>Screen : 2</h1>
                </FullpageSection>

                <FullpageSection style={style}>
                        <h1 className='text-5xl'>Screen : 3</h1>
                </FullpageSection>
                <FullpageSection style={style}>
                        <h1 className='text-5xl'>Screen : 1</h1>
                </FullpageSection>

                <FullpageSection style={style}>
                        <h1 className='text-5xl'>Screen : 2</h1>
                </FullpageSection>

                <FullpageSection style={style}>
                        <h1 className='text-5xl'>Screen : 3</h1>
                </FullpageSection>
              

            </FullPageSections>
        </Fullpage>
    )
}

export default TestScolling