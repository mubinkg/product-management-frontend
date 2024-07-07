import Image from 'next/image'
import React from 'react'
import { Container } from 'reactstrap'
import AppNav from './Navbar'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#000419", padding: "120px 0px 0px 0px" }}>
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
                <div className='my-4'>
                    <AppNav/>
                </div>
                <div style={{borderBottom: "2px solid white"}}></div>
                <div className='d-flex justify-content-between my-4'>
                    <small className='text-white'>© 2024. All rights reserved.</small>
                    <ul className='text-white' style={{listStyleType: "none", display: "flex", gap: "20px"}}>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies Settings</li>
                    </ul>
                </div>            
            </Container>
        </div>
    )
}

export default Footer
