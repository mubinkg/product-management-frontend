import Image from 'next/image'
import React from 'react'
import { Container } from 'reactstrap'

const HomeNotification = () => {
    return (
        <div style={{ backgroundColor: "#000419", height: "580px" }}>
            <Container>
                <div className='d-flex flex-column align-items-center'>
                    <Image style={{ marginTop: "120px" }} src="/notification.png" alt='notification' width={134} height={133} />
                    <h2 className='text-white' style={{ maxWidth: "500px", textAlign: "center", marginTop: "30px", lineHeight: "45px", fontSize: "40px" }}>
                        Get Alerts for asset maintenance, updates, and issues
                    </h2>
                </div>
            </Container>
        </div>
    )
}

export default HomeNotification
