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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function AppNav(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand onClick={()=>console.log('Clicked')} className='text-white pointer'>
          <Image src="/logo.png" alt='logo' width={160} height={57}/>
        </NavbarBrand>
        <NavbarToggler className='text-white' onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink  className='text-white'>SignIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white'>
                SignOut
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNav;