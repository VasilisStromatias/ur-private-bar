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
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec quis tellus ut tortor sagittis porta eget et ligula. 
                Phasellus tortor mauris, consectetur sit amet pulvinar eu, tempor et 
                sapien. Maecenas rutrum justo vitae odio maximus, et maximus felis 
                feugiat. Ut condimentum, mi nec faucibus pulvinar, dolor nisi tincidunt 
                nisi, vitae blandit purus arcu et risus. Integer finibus ante eget mi 
                posuere cursus. Class aptent taciti sociosqu ad litora torquent per 
                conubia nostra, per inceptos himenaeos. Praesent rhoncus 
                tortor pellentesque tempus mattis. </p>
                <p className='m-0'>In augue ante, tincidunt sit amet nisl ut, malesuada porttitor 
                felis. Integer sagittis risus posuere blandit sodales. Nunc eleifend, 
                metus nec tincidunt volutpat, neque risus sollicitudin mauris, eget 
                accumsan libero tortor sit amet nisl. Aliquam congue tristique porta. 
                Aenean efficitur neque arcu, id maximus lorem gravida sit amet. 
                Suspendisse potenti. Pellentesque habitant morbi tristique senectus 
                et netus et malesuada fames ac turpis egestas. Vestibulum non tristique 
                lacus. Sed commodo orci quis mi viverra, sit amet imperdiet sem pretium. 
                Maecenas magna velit, 
                ullamcorper non dignissim ut, eleifend a sem.</p>

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