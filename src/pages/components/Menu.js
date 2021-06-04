import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/Menu.css';

function Menu () {
    return(
        <>
    <nav className='main-menu d-flex justify-between navbar navbar-dark bg-dark
    p-0'>
            <Link to='/' className='navbar-brand mx-5 p-0'>Ur Private Bar</Link>

        <div className='mx-5 '>
            <Link to='/' className='nav-item mx-3 text-light active'>Home</Link>
            <Link to='/masterclass' className='nav-item mx-3 text-light'>Masterclass</Link>
            <Link to='/cocktail' className='nav-item mx-3 text-light'>Cocktail</Link>
            <Link to='/team' className='nav-item mx-3 text-light'>Team</Link>
            <Link to='/contact' className='nav-item mx-3 text-light'>Contact us</Link>
        </div>
            
    </nav>
        </>
    );
}

export default Menu;