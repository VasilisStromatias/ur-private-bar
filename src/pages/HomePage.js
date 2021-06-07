import React from 'react';
import '../css/HomePage.css';

import {Link} from 'react-router-dom';


import black from '../images/black.png';


function HomePage (){
    return (
        <>

        <div className='level-1 d-flex justify-content-center align-items-center
         m-0 jura-font bg-main-yellow'>
            <div>
                <img className='logo-350x1000' src={black} alt='logo-yellow'/>
            </div>
        </div> {/* LEVEL-1 */}

        <div className='level-2 d-flex justify-content-center align-items-center text-center
        jura-font'>

            <div>
                <h3 className='cocktail-text text-main-yellow font-weight-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin facilisis nisi in justo finibus finibus.
                </h3>

                <button className='cocktail-button rounded border border-dark'>
                    <Link className='text-main-dark' to='/cocktail'>Cocktail list</Link>
                </button>

            </div>

        </div>{/* LEVEL 2 */}


        <div className='level-3 d-flex justify-content-center align-items-center text-center
        jura-font'>

            <div>
                <h3 className='cocktail-text text-main-yellow font-weight-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin facilisis nisi in justo finibus finibus.
                </h3>

                <button className='cocktail-button rounded border border-dark'>
                    <Link className='text-main-dark' to='/masterclass'>Masterclasses</Link>
                </button>

            </div>

        </div>{/* LEVEL 3 */}

        <div className='level-4 d-flex justify-content-center align-items-center text-center
        jura-font'>

            <div>
                <h3 className='cocktail-text text-main-yellow font-weight-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin facilisis nisi in justo finibus finibus.
                </h3>

                <button className='cocktail-button rounded border border-dark'>
                    <Link className='text-main-dark' to='/cocktail'>Bar Services</Link>
                </button>

            </div>

        </div>{/* LEVEL-4 */}

        </>   
    );
}

export default HomePage;