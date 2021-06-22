import React from 'react';
import {Link} from 'react-router-dom'; 

import Dropdown from 'react-bootstrap/Dropdown'; //React Bootstrap

import {TiThMenu} from 'react-icons/ti';

import '../../css/Menu.css';

import yellow from '../../images/yellow.png';

function Menu () {
    return(
        <>
    <nav className='main-menu d-flex justify-between navbar bg-main-dark
    p-0 jura-font sticky-top opacity-8'>

        
            <Link to='/' className='navbar-brand mx-5 p-0 text-light'>
                <img src={yellow} alt='logo-yellow' className='logo' />
            </Link>

            <button className='mobile-menu-button bg-main-dark p-0'>
                <TiThMenu className='mobile-menu-icon text-light d-lg-none '/>
            </button>

        <ul className='mx-5 p-0 d-flex my-auto'>
            <li className='nav-item'><Link to='/' className='=mx-3 text-light nav-link'>Home</Link></li>
            <li className='nav-item'><Link to='/cocktail' className='=mx-3 text-light nav-link'>Cocktail</Link></li>

            <Dropdown>
                <Dropdown.Toggle id='dropdown-basic'>
                    <li className='nav-item'><Link to='#' className='=mx-3 text-light nav-link'>Bar Service</Link></li>
                </Dropdown.Toggle>
                

                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link to='/masterclass'>Masterclass</Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Link to='/masterclass'>Seminars</Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Link to='/masterclass'>Other one page</Link>
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>


            <li className='nav-item'><Link to='/gallery' className='=mx-3 text-light nav-link'>Gallery</Link></li>            
            <li className='nav-item'><Link to='/team' className='=mx-3 text-light nav-link'>Team</Link></li>
            <li className='nav-item'><Link to='/contact' className='=mx-3 text-light nav-link'>Contact us</Link></li>
        </ul>
        
    </nav>
        </>
    );
}

export default Menu;