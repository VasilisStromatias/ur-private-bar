import React from 'react';
import '../../css/Footer.css';

import yellow from '../../images/yellow.png'

function Footer () {
    return(
        <>
    <footer className='d-flex justify-content-around align-items-center
    bg-main-dark text-main-light jura-font'>

        <div className='contact text-center'>
            <h2 className='text-main-yellow'> Contact Info</h2>
            <p>E-mail : zachos@gmail.com</p>
            <p>Tel: 210-7896324</p>
        </div>

        <div>
            <img className='logo-100x300' src={yellow} alt='yellow-logo' />
        </div>

        <div className='social text-center'>
            <h3 className='text-main-yellow'>Find us on:</h3>
        
            <div className='social-icons'> 
                <p>Social</p>
                <p>Social</p>
                <p>Social</p>
            </div>
        </div>

    </footer>
        
        </>
    );
}

export default Footer;