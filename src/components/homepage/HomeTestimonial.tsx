import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import TestimonitalCard from './TestimonitalCard'
import Image from 'next/image'

const HomeTestimonial = () => {
    return (
        <div style={{ marginTop: "120px" }}>
            <Container>
                <div className='d-flex flex-column align-items-center'>
                    <h1>
                        Testimonials
                    </h1>
                    <small style={{maxWidth: "600px", textAlign: "center"}}>
                        Lorem ipsum dolor sit amet consectetur. Lacus lacus nibh et nunc fringilla amet. Blandit in tortor varius orci vel quam quis sit. Viverra magna ullamcorper.
                    </small>
                </div>
                <Row style={{marginTop: "40px"}}>
                    <Col lg={4} md={12}>
                        <TestimonitalCard
                            stars='/stars.png'
                            body='Lorem ipsum dolor sit amet consectetur. Lacus lacus nibh et nunc fringilla amet. Blandit in tortor varius orci vel quam quis sit. Viverra magna ullamcorper. Lorem ipsum dolor sit amet consectetur. Lacus lacus nibh et nunc fringilla amet. Blandit in tortor varius orci vel quam quis sit. Viverra magna ullamcorper.'
                            avator='/avator1.png'
                            title='Annette Black'
                            tag='United States'
                        />
                    </Col>
                    <Col lg={4} md={12}>
                        <TestimonitalCard
                            stars='/stars.png'
                            body='Lorem ipsum dolor sit amet consectetur. Lacus lacus nibh et nunc fringilla amet. Blandit in tortor varius orci vel quam quis sit. Viverra magna ullamcorper. Lorem ipsum dolor sit amet consectetur. Lacus lacus nibh et nunc fringilla amet. Blandit in tortor varius orci vel quam quis sit. Viverra magna ullamcorper.'
                            avator='/avator1.png'
                            title='Annette Black'
                            tag='United States'
                        />
                    </Col>
                    <Col lg={4} md={12}>
                        <TestimonitalCard
                            stars='/stars.png'
                            body='Lorem ipsum dolor sit amet consectetur. Lacus lacus nibh et nunc fringilla amet. Blandit in tortor varius orci vel quam quis sit. Viverra magna ullamcorper. Lorem ipsum dolor sit amet consectetur. Lacus lacus nibh et nunc fringilla amet. Blandit in tortor varius orci vel quam quis sit. Viverra magna ullamcorper.'
                            avator='/avator1.png'
                            title='Annette Black'
                            tag='United States'
                        />
                    </Col>
                </Row>
                <div className='d-flex justify-content-center my-4'>
                    <Image src='/dot.png' alt='dot' width={60} height={15}/>
                </div>
            </Container>
        </div>
    )
}

export default HomeTestimonial
