import React from 'react'
import { Container } from 'reactstrap'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#000419" }}>
            <Container>
                <div className='mt-4'>
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: "#1C64F2", height: "400px", borderRadius: "40px" }}>
                        <h1 className='text-white'>Ready to get started?</h1>
                        <span style={{ maxWidth: "600px", textAlign: "center", color: "white" }}>
                            Lorem ipsum dolor sit amet consectetur. Lacus lacus nibh et nunc fringilla amet. Blandit in tortor varius orci vel quam quis sit. Viverra magna ullamcorper.
                        </span>
                        <button className='footer-btn mt-4'>Get Started</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
