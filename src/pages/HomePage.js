import React from 'react';
import '../css/HomePage.css';

import {Link} from 'react-router-dom';


import black from '../images/black.png';
import zachos from '../images/zachos.jpg';


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


        <div className='team-level d-flex justify-content-around align-items-center'>

            <div className='team-level-item d-flex flex-column justify-content-center align-items-center 
            text-center'>
                <img src={zachos} alt='coc' 
                className='rounded-circle'/>
                <div className='text-main-yellow mt-4 jura-font'>
                    <h3>Ζάχος Κυρίτσης</h3>
                    <p>Head Bartender</p>
                </div>
            </div> {/* TEAM_LEVEL_ITEM */}

            <div className='team-level-item d-flex flex-column justify-content-center align-items-center 
            text-center'>
                <img src={zachos} alt='coc' 
                className='rounded-circle'/>
                <div className='text-main-yellow mt-4 jura-font'>
                    <h3>Zachos Kyritsis</h3>
                    <p>Head Bartender</p>
                </div>
            </div> {/* TEAM_LEVEL_ITEM */}

            <div className='team-level-item d-flex flex-column justify-content-center align-items-center 
            text-center'>
                <img src={zachos} alt='coc' 
                className='rounded-circle'/>
                <div className='text-main-yellow mt-4 jura-font'>
                    <h3>Zachos Kyritsis</h3>
                    <p>Head Bartender</p>
                </div>
            </div> {/* TEAM_LEVEL_ITEM */}

        </div> {/* TEAM LEVEL */}

        </>   
    );
}

export default HomePage;