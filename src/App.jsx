import { useState } from 'react'
import './App.css'
// components
import Navbar from './components/NavbarTextWhite'
import Hero from './components/Hero'
import ModelY from './components/ModelY'
import SalePost from './components/SalePostWhite'
import HeadPage from './components/HeadPage'
import TestScolling from './components/TestScolling'
import Heropage from './components/Heropage'
import FullpageScroll from './components/FullpageScroll'


function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='scrollable-container'>
        <SalePost  />
          <Navbar />
          <Heropage  />

       <ModelY/>
       {/* <TestScolling /> */}
      {/* <FullpageScroll/> */}

      </div>
  )
}

export default App
