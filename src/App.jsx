
import React from 'react'
import Navbar from './components/Navbar'
import Marqee from './components/Marqee'
import Details from './components/Details'
import Image from './components/Image'

const App = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <Navbar/>
      <Marqee/>
      <Image/>
      <Details/>
    </div>
  )
}

export default App