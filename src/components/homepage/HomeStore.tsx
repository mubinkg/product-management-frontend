import React from 'react'

const HomeStore = () => {
  return (
    <div style={{marginTop: "60px", height: "789px"}} className='store'>
      <div 
        style={{
          display: 'flex',
          flexDirection:"column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{color: "white", marginTop: "300px", textAlign:"center", width: "380px"}}>
          Store Your Device in Our Warehouse and Track Them!
        </h1>
        <button className='hero-btn'>Get Started</button>
      </div>
    </div>
  )
}

export default HomeStore
