import Image from 'next/image'
import React from 'react'

type IProps = {
    stars: string,
    body: string,
    avator: string,
    title: string,
    tag: string
}

const TestimonitalCard = ({ stars, body, avator, title, tag }: IProps) => {
    return (
        <div style={{ border: "2px solid lightgray", padding: "30px", borderRadius: "30px" }}>
            <Image src={stars} alt='stars' width={162} height={30} />
            <p className='mt-4'>
                {body}
            </p>
            <div className='d-flex gap-4 mt-4'>
                <Image src={avator} alt='avator' width={64} height={64} />
                <div>
                    <h4>{title}</h4>
                    <p>{tag}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonitalCard
