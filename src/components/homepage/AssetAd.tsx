import React from 'react'
import { Container } from 'reactstrap'

const AssetAd = () => {
    return (
        <Container>
            <div className='d-flex flex-column align-items-center' style={{ marginTop: "120px" }}>
                <h1>Simplify Your IT</h1>
                <h1>
                    Asset Management
                </h1>
                <small className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur. Arcu pellentesque aenean
                </small>
                <small>
                    sagittis cras est varius metus massa velit. Semper massa massa id
                </small>
                <small>
                    lacinia feugiat. Sit tristique augue fringilla.
                </small>
                <button className='hero-btn mt-4' style={{marginBottom: "60px"}}>Get Started</button>
            </div>
        </Container>
    )
}

export default AssetAd
