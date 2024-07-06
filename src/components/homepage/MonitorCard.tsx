import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'reactstrap'

type PropType = {
    image: string
    title: string
    header: string
    body: string
}

const MonitorCard = ({image, title, header, body}:PropType) => {
  return (
    <div className='p-4 m-4' style={{border:"1px solid #1C64F2", borderRadius: "25px"}}>
      <div className='d-flex align-items-center gap-4' style={{marginBottom: "25px"}}>
        <Image alt='img' src={image} width={50} height={50}/>
        <h4 className='mt-2' style={{color: "#1C64F2"}}>{title}</h4>
      </div>
      <h2>
        {header}
      </h2>
      <small style={{marginTop: "25px"}}>
        {body}
      </small>
    </div>
  )
}

export default MonitorCard
