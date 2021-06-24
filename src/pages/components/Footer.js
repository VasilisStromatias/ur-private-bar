import React from 'react';
import '../../css/Footer.css';
import {Link} from 'react-router-dom';


import yellow from '../../images/yellow.png';

import {SiFacebook , SiInstagram , SiYoutube} from 'react-icons/si';

function Footer () {
    return(
        <>
    <footer className='d-flex justify-content-around align-items-center
    bg-main-dark text-main-light jura-font row'>

        <div className='contact text-center
        col-lg-4 col-sm-12'>
            <h2 className='text-main-yellow'>Επικοινωνία</h2>
            <p>e-mail : zachos@gmail.com</p>
            <p>tel: 210-7896324</p>
        </div>

            <img className='logo-100x300 
            col-lg-4 col-sm-12' 
            src={yellow} alt='yellow-logo' />

        <div className='social text-center
        col-lg-4 col-sm-12'>
            <h3 className='text-main-yellow'>Find us on:</h3>
        
            <div className='social-icons d-flex justify-content-center align-items-center'> 
                <Link className='text-main-yellow mx-3'>
                    <SiFacebook className='fb-icon'/>
                </Link>

                <Link className='text-main-yellow mx-3'>
                    <SiInstagram className='instagram-icon'/>
                </Link>

                <Link className='text-main-yellow mx-3'>
                    <SiYoutube className='youtube-icon'/>
                </Link>

            </div>
        </div>

    </footer>

    <p className='copyright-text m-0 text-main-gray opacity-4 text-center'>
        Copyright &copy; 2021 Your Private Bar  | Desinged and developed by Vasilis Stromatias 
    </p>
        
        </>
    );
}

export default Footer;