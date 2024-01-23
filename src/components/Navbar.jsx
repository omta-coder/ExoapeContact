import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full py-10 px-32 flex justify-between items-center'>
        <div className="brandlogo">
            <h1 className='font-bold'>exo <span className='italic font-normal '>app</span></h1>
        </div>
        <div className="links flex gap-5 items-center text-sm">
        {["Home", "About", "Contact", "Pricing"].map((item, index) => (
            <a key={index} href="#">{item}</a>
          ))}
        </div>
    </div>
  )
}

export default Navbar