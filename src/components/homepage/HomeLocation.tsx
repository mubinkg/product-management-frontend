import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const HomeLocation = () => {
    return (
        <div style={{marginTop: "80px", marginBottom: "80px"}}>
            <Container>
                <div className='d-flex flex-column align-items-center'>
                    <Image src='/map.png' alt='map' width={378} height={378} />
                    <h1 style={{width: "780px", textAlign: "center"}}>
                        View the location of your devices with our interactive map feature.
                    </h1>
                    <small className='mt-4' style={{width: "780px", textAlign: "center"}}>
                        Lorem ipsum dolor sit amet consectetur. Arcu pellentesque aenean sagittis cras est varius metus massa velit. Semper massa massa id lacinia feugiat. Sit tristique augue fringilla.
                    </small>
                </div>
                <div style={{marginTop: "80px"}}>
                    <Row>
                        <Col md={6} sm={12}>
                            <Image src='/map1.jpg' alt='map2' width={530} height={516}/>
                        </Col>
                        <Col md={6} sm={12} style={{ paddingTop: "90px"}}>
                            <h1>
                            Get Real Time shipment updates of your assets!
                            </h1>
                            <small className='mt-4'>
                            Lorem ipsum dolor sit amet consectetur. Arcu pellentesque aenean sagittis cras est varius metus massa velit. Semper massa massa id lacinia feugiat. Sit tristique augue fringilla.
                            </small>
                            <button className='hero-btn mt-4'>
                                Get Started
                            </button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default HomeLocation
