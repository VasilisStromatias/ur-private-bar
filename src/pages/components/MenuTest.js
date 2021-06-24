import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'
import NavbarToggle from 'react-bootstrap/NavbarToggle'

import '../../css/MenuTest.css';

import white from '../../images/white.png'
import { NavDropdown} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function MenuTest () {
    return(
        <>

<div className='navbar-logo'>
   <a href='/' className='d-flex justify-content-center'>
       <img src={white} alt='logo' />
   </a>
</div>
<Navbar expand='md' sticky='top' className='p-0 bg-main-dark opacity-8
d-flex flex-column justify-content-center align-items-center'>

        <NavbarToggle className='toggle-icon' />
    
<NavbarCollapse className='collapse'>
    
    <Nav className='main-test-menu'>
        <NavLink className='text-light' href='/'>Home</NavLink>
        <NavLink className='text-light' href='/cocktail'>Cocktails</NavLink>
        <NavLink className='text-light' href='#'>Bar Services</NavLink>
            <NavDropdown>
                <NavDropdown.Item href='/masterclass'>Masterclass</NavDropdown.Item>
                <NavDropdown.Item href='/'>Seminars</NavDropdown.Item>
                <NavDropdown.Item href='/'>Services</NavDropdown.Item>
            </NavDropdown>
        <NavLink className='text-light' href='/team'>Team</NavLink>
        <NavLink className='text-light' href='/contact'>Contact us</NavLink>
        <NavLink className='text-light' href='/gallery'>Gallery</NavLink>
    </Nav>

    </NavbarCollapse>

</Navbar>
        </>
    );
}

export default MenuTest;