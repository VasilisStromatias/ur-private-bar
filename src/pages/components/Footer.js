import React from 'react';
import '../../css/Footer.css';

function Footer () {
    return(
        <>
    <footer className='d-flex justify-content-around align-items-center
    bg-dark text-light'>

        <div className='contact text-center'>
            <h2> Contact Info</h2>
            <p>E-mail : zachos@gmail.com</p>
            <p>Tel: 210-7896324</p>
        </div>

        <div className='social text-center'>
            <h3>Find us on:</h3>
        
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