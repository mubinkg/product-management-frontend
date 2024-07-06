'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

function AppNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand onClick={() => console.log('Clicked')} className='text-white pointer'>
          <Image src="/logo.png" alt='logo' width={160} height={57} />
        </NavbarBrand>
        <NavbarToggler className='text-white' onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem className='pointer'>
              <NavLink className='text-white'>
                Why Choose Us?
              </NavLink>
            </NavItem>
            <NavItem className='pointer'>
              <NavLink className='text-white'>
                Testimonials
              </NavLink>
            </NavItem>
            <NavItem className='pointer'>
              <NavLink className='text-white'>
                FAQ
              </NavLink>
            </NavItem>
            <NavItem className='pointer'>
              <NavLink className='text-white'>
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem className='pointer'>
              <NavLink className='text-white'>
                Login
              </NavLink>
            </NavItem>
            <NavItem className='pointer'>
              <Button outline style={{marginLeft: "20px"}} className='text-white'>Get Started</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNav;