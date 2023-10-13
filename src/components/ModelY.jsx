import React from 'react'
// components
import Hero from './Hero'
import Navbar from './NavbarTextWhite'
import SalePost from './SalePostWhite'
import HeadPage from './HeadPage'
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage'

const ModelY = () => {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>

        <FullpageSection style={{ height: '100vh' }}>
          <Navbar/>
          <HeadPage />
        </FullpageSection>

        <FullpageSection style={{ height: '100vh' }} >

          <div className="bg-[url('./src/image/Homepage-Model-Y-Global-Desktop.avif')] h-screen bg-cover bg-[center_top_67rem]">
            <Hero />
          </div>

        </FullpageSection>



      </FullPageSections>
    </Fullpage>
  )
}


export default ModelY