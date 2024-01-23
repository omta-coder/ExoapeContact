import React from 'react'

const Details = () => {
  return (
    <div className='w-full py-10 px-40 mt-14 flex justify-between'>
        <div>
        <h1>Ready for lift-off? Ping, tweet, message or poke <br /> — and we will get back as soon as possible.</h1>
        <div className="linkofbtm mt-12">
          <a className='font-regular text-lg block mt-3' href="#">
          hello@exoape.com
          </a>
          <a className='font-regular text-lg block mt-3' href="#">
          +31 772 086 200
          </a>
        </div>
        </div>
        <div>
          <h4 className='font-light text-xl'> Willem II Singel 8 <br /> 6041 HS, Roermond <br />The Netherlands</h4>
          <a className='font-light text-xl block mt-10' href="#">View on map</a>
        </div>
    </div>
  )
}

export default Details