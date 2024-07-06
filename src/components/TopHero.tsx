import Image from 'next/image'
import React from 'react'
import { Button } from 'reactstrap'

const TopHero = () => {
  return (
    <div className='d-flex flex-column align-items-center' style={{ marginTop: "80px" }}>
      <h4 className='text-uppercase' style={{ color: "#1C64F2" }}>
        Introducing issyx
      </h4>
      <h1 className='mt-4'>
        Effortless IT Asset
      </h1>
      <h1>
        Management Solutions!
      </h1>
      <small className='mt-4'>
        Discover a seamless way to manage your IT assets with our comprehensive
      </small>
      <small>
        solution designed for ease and efficiency.
      </small>
      <button className='hero-btn mt-4 mb-4'>Get Started</button>
      <div>
        <Image
          src="/hero.png"
          alt='hero'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  )
}

export default TopHero
