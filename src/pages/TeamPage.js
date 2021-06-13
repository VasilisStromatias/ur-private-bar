import React from 'react';
import '../css/TeamPage.css';

import test from '../images/masterclass1.jpg';
import zachos from '../images/zachos.jpg';

import {Link} from 'react-router-dom';
import {SiFacebook , SiInstagram } from 'react-icons/si';


function TeamPage (){
    return (
        <>
        <div className='team-container'>

            <div className='team-bg-image'>
                <div className='meet-team-text d-flex justify-content-center align-items-center 
                bg-dark opacity-8 mx-auto'> 
                    <h1 className=' text-main-light jura-font m-0'>
                        Γνωρίστε την ομάδα μας
                    </h1>
                </div>
            </div> 
            {/* TEAM BG IMAGE */}

            <div className='team-members-main-heading 
            text-center jura-font text-main-light
            d-flex align-items-end justify-content-center'>
                <h1 className='m-0'>Σχετικά με μας</h1>
            </div> 
            {/* TEAM MEMBERS MAIN HEADING */}

            <div className='about-us-container p-5 m-5' >

                <div className=' d-flex justify-content-around align-items-center'>

                    <img src={test} alt='test'
                    className='about-us-image'/>
                

                    <h5 className='about-us-text text-main-light d-flex align-items-center text-center 
                    m-0 jura-font'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus et molestie odio. Maecenas lobortis ornare nibh, nec tempor nibh 
                        accumsan vitae. Vestibulum tellus dolor, scelerisque non mauris vitae, viverra
                        blandit elit. Proin aliquam sem non ligula consectetur viverra. Praesent vel
                        molestie sapien. In dictum consectetur convallis. In consectetur libero a 
                        pretium blandit.Vivamus et molestie odio. Maecenas lobortis ornare nibh, nec tempor nibh 
                        accumsan vitae. Vestibulum tellus dolor, scelerisque non mauris vitae, viverra
                        blandit elit. Proin aliquam sem non ligula consectetur viverra. Praesent vel
                        molestie sapien. In dictum consectetur convallis. In consectetur libero a 
                        pretium blandit.
                    </h5>

                </div>

            </div> {/* ABOUT US CONTAINER */}
            
            <div className='team-members-main-heading 
            text-center jura-font text-main-light'>
                <h1>Η ομάδα μας</h1>
            </div> 
            {/* TEAM MEMBERS MAIN HEADING */}
            
            <div className='team-members-container container 
            d-flex justify-content-between'>

                <div className='team-members-item'>

                    <img src={zachos} alt='zachos' 
                    className='team-members-image'/>
                        <div className='text-center text-main-light jura-font mt-4'>
                            <h1>Zachos Kyritsis</h1>
                            <p>Head Bartender</p>    
                        </div>
                            <div className='team-social-icons d-flex justify-content-around mx-auto'>
                                <Link className='text-main-yellow'>
                                    <SiFacebook className='fb-icon'/>
                                </Link>

                                <Link className='text-main-yellow'>
                                    <SiInstagram className='instagram-icon'/>
                                </Link>
                            </div> {/* TEAM SOCIAL ICONS */}

                </div> {/* TEAM MEMBERS ITEM */}

                <div className='team-members-item'>

                    <img src={zachos} alt='zachos' 
                    className='team-members-image'/>

                        <div className='text-center text-main-light jura-font mt-4'>
                            <h1>Zachos Kyritsis</h1>
                            <p>Head Bartender</p>    
                        </div>

                            <div className='team-social-icons d-flex justify-content-around mx-auto'>
                                    <Link className='text-main-yellow'>
                                        <SiFacebook className='fb-icon'/>
                                    </Link>

                                    <Link className='text-main-yellow'>
                                        <SiInstagram className='instagram-icon'/>
                                    </Link>
                            </div> {/* TEAM SOCIAL ICONS */}

                </div> {/* TEAM MEMBERS ITEM */}

                <div className='team-members-item'>

                    <img src={zachos} alt='zachos' 
                    className='team-members-image'/>
                        <div className='text-center text-main-light jura-font mt-4  '>
                            <h1>Zachos Kyritsis</h1>
                            <p>Head Bartender</p>    
                        </div>
                            <div className='team-social-icons d-flex justify-content-around mx-auto'>
                                    <Link className='text-main-yellow'>
                                        <SiFacebook className='fb-icon'/>
                                    </Link>

                                    <Link className='text-main-yellow'>
                                        <SiInstagram className='instagram-icon'/>
                                    </Link>
                                </div> {/* TEAM SOCIAL ICONS */}
                </div> {/* TEAM MEMBERS ITEM */}

            </div> {/* TEAM MEMBERS CONTAINER */}

        </div> {/* TEAM CONTAINER */}
        </>   
    );
}

export default TeamPage;