import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const HomeDashboard = () => {
    return (
        <div style={{ marginTop: "120px", marginBottom: "80px" }}>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <div className='d-flex flex-column align-items-start p-4 m-4'>
                            <h1 style={{textTransform: "capitalize"}} className='mb-4'>
                                user friendly dashboard to manage your assets
                            </h1>
                            <small className='mb-4'>
                                Lorem ipsum dolor sit amet consectetur. Arcu pellentesque aenean sagittis cras est varius metus massa velit. Semper massa massa id lacinia feugiat. Sit tristique augue fringilla.
                            </small>
                            <button className='hero-btn'>
                                Get Started
                            </button>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <Image width={530} height={488} src="/section.png" alt="section" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeDashboard
