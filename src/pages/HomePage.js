import React from 'react';
import '../css/HomePage.css';

import {Link} from 'react-router-dom';
import {SiFacebook , SiInstagram } from 'react-icons/si';



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

        <div className='about-us-section'>

            <div className='about-us-section-text text-main-light text-center jura-font
            d-flex flex-column justify-content-center align-items-center mx-auto'>
                <h1 className='my-5 display-4'>Σχετικά με μας</h1>
                <p className='w-50'>Η εταιρεία μας αποτελείται από προσωπικό άρτια εκπαιδευμένο
                στην Ελλάδα και στο εξωτερικό. Είναι υπέυθυνη για την οργάνωση και την ομαλή
                λειτουργία της εκδήλωσης. Δημιουργούμε μαζί σας ένα αποκλειστικά ξεχωριστό Menu
                έχοντας την δυνατότητα να σας προσφέρουμε όλο τον εξοπλισμό για την
                εκδήλωση ή το πάρτυ σας με βασικό γνώμονα πάντα την επιτυχία του. </p>
                <p className='m-0'></p>

            </div>
            
        </div>

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
                        <div className='team-social-icons d-flex justify-content-around mx-auto'>
                            <Link className='text-main-yellow'>
                                <SiFacebook className='fb-icon'/>
                            </Link>

                            <Link className='text-main-yellow'>
                                <SiInstagram className='instagram-icon'/>
                            </Link>
                        </div> {/* TEAM SOCIAL ICONS */}
                </div>
            </div> {/* TEAM_LEVEL_ITEM */}

            <div className='team-level-item d-flex flex-column justify-content-center align-items-center 
            text-center'>
                <img src={zachos} alt='coc' 
                className='rounded-circle'/>
                <div className='text-main-yellow mt-4 jura-font'>
                    <h3>Zachos Kyritsis</h3>
                    <p>Head Bartender</p>
                        <div className='team-social-icons d-flex justify-content-around mx-auto'>
                            <Link className='text-main-yellow'>
                                <SiFacebook className='fb-icon'/>
                            </Link>

                            <Link className='text-main-yellow'>
                                <SiInstagram className='instagram-icon'/>
                            </Link>
                        </div> {/* TEAM SOCIAL ICONS */}
                </div>
            </div> {/* TEAM_LEVEL_ITEM */}

            <div className='team-level-item d-flex flex-column justify-content-center align-items-center 
            text-center'>
                <img src={zachos} alt='coc' 
                className='rounded-circle'/>
                <div className='text-main-yellow mt-4 jura-font'>
                    <h3>Zachos Kyritsis</h3>
                    <p>Head Bartender</p>
                        <div className='team-social-icons d-flex justify-content-around mx-auto'>
                            <Link className='text-main-yellow'>
                                <SiFacebook className='fb-icon'/>
                            </Link>
        
                            <Link className='text-main-yellow'>
                                <SiInstagram className='instagram-icon'/>
                            </Link>
                        </div> {/* TEAM SOCIAL ICONS */}
                </div>
            </div> {/* TEAM_LEVEL_ITEM */}

        </div> {/* TEAM LEVEL */}

        </>   
    );
}

export default HomePage;