import React from 'react';
import {Link} from 'react-router-dom';

function Menu () {
    return(
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/masterclass'>Masterclass</Link>
            <Link to='/cocktail'>Cocktail</Link>
            <Link to='/team'>Team</Link>
            <Link to='/contact'>Contact us</Link>
        </nav>
        </>
    );
}

export default Menu;