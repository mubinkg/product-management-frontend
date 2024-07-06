import Image from 'next/image'
import React from 'react'
import { Button } from 'reactstrap'

const TopHero = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h2>
        Introducing issyx
      </h2>
      <h1>
        Effortless IT Asset Management Solutions!
      </h1>
      <small>
        Discover a seamless way to manage your IT assets with our comprehensive solution designed for ease and efficiency.
      </small>
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
