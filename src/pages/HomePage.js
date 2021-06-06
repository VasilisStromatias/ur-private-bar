import React from 'react';
import '../css/HomePage.css';

import {Link} from 'react-router-dom';


import black from '../images/black.png';
import pinkCocktail from '../images/pinkCocktail.jpg';


function HomePage (){
    return (
        <>
        <div className='level-1 d-flex justify-content-center align-items-center
         m-0 jura-font bg-main-yellow'>
            <div>
                <img className='logo-350x1000' src={black} alt='logo-yellow'/>
            </div>
        </div>

        <div className='level-2 d-flex justify-content-center align-items-center text-center
        jura-font'>

            <div>
                <h3 className='cocktail-text border border-dark'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin facilisis nisi in justo finibus finibus.
                </h3>

                <button className='cocktail-button'>
                    <Link to='/cocktail'>See the Cocktail list</Link>
                </button>

            </div>

        </div>
        </>   
    );
}

export default HomePage;