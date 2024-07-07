import Image from 'next/image'
import React from 'react'

const HomeProductAd = () => {
  return (
    <div>
      <div className='product' style={{ width: "100%", minHeight: "1072px" }}>
        <div
          style={{
            display: 'flex',
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "white", marginTop: "200px", textAlign: "center", width: "380px" }}>
            Lease/Purchase Laptop From Us!
          </h1>
        </div>
      </div>
      <div style={{ backgroundColor: "#000419", height: "528px" }} className='d-flex flex-column align-items-center'>
        <Image style={{marginTop: "100px",}} src='/certificate.png' alt='certificate' width={60} height={60} />
        <h1 className='text-white mt-4' style={{maxWidth: "700px", textAlign: "center"}}>
          We Provide software license management Solution!
        </h1>
        <small className='text-white mt-4' style={{maxWidth: "600px", textAlign: "center"}}>
          Lorem ipsum dolor sit amet consectetur. Arcu pellentesque aenean sagittis cras est varius metus massa velit. Semper massa massa id lacinia.
        </small>
      </div>
      <div className='choose' style={{height: "800px"}}>
      </div>
    </div>
  )
}

export default HomeProductAd
