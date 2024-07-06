import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import MonitorCard from './MonitorCard'

const Monitor = () => {
    return (
        <Container>
            <div className='d-flex flex-column align-items-center' style={{ marginTop: "200px" }}>
                <h1>
                    Monitor and manage your
                </h1>
                <h1>
                    IT assets in real-time with
                </h1>
                <h1>
                    advanced tracking tools.
                </h1>
            </div>
            <Row style={{marginTop: "20px"}}>
                <Col md={6} sm={12}>
                    <MonitorCard
                        image='/track.png'
                        title='Asset Tracking'
                        header='Real-time tracking and management of IT assets.'
                        body='Lorem ipsum dolor sit amet consectetur. Arcu pellentesque aenean sagittis cras est varius metus massa velit. Semper massa massa id lacinia feugiat. Sit tristique augue fringilla.'
                    />
                </Col>
                <Col md={6} sm={12}>
                    <MonitorCard
                        image='/research.png'
                        title='Reporting'
                        header='Comprehensive reporting tools for asset usage and status.'
                        body='Lorem ipsum dolor sit amet consectetur. Arcu pellentesque aenean sagittis cras est varius metus massa velit. Semper massa massa id lacinia feugiat. Sit tristique augue fringilla.'
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Monitor
