'use client'

import React, { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Col,
    Container,
    Row,
} from 'reactstrap';


const HomeFaq = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id: string) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    return (
        <div style={{marginTop: "160px", marginBottom: "120px"}}>
            <Container>
                <Row>
                    <Col lg={5} md={12}>
                        <h1>Frequently asked questions</h1>
                    </Col>
                    <Col lg={7} md={12}>
                        <div>
                            <Accordion open={open} toggle={toggle}>
                                <AccordionItem>
                                    <AccordionHeader targetId="1">What is pricing?</AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <strong>This is the first item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="2">How can it improve my asset management?</AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <strong>This is the second item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="3">Do you have any social proof?</AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <strong>This is the third item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="4">Where do you operate?</AccordionHeader>
                                    <AccordionBody accordionId="4">
                                        <strong>This is the second item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeFaq
