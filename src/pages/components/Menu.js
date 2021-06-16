import React from 'react';
import {Link} from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown'

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

        <ul className='mx-5 p-0 d-flex my-auto'>
            <li className='nav-item'><Link to='/' className='=mx-3 text-light nav-link'>Home</Link></li>
            <li className='nav-item'><Link to='/masterclass' className='=mx-3 text-light nav-link'>Masterclass</Link></li>
            <li className='nav-item'><Link to='/cocktail' className='=mx-3 text-light nav-link'>Cocktail</Link></li>
            <li className='nav-item'><Link to='/barservices' className='=mx-3 text-light nav-link'>Bar Service</Link></li>
            <li className='nav-item'><Link to='/team' className='=mx-3 text-light nav-link'>Team</Link></li>
            <li className='nav-item'><Link to='/contact' className='=mx-3 text-light nav-link'>Contact us</Link></li>
        </ul>
            
    </nav>
        </>
    );
}

export default Menu;