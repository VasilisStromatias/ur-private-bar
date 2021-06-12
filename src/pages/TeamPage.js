import React from 'react';
import '../css/TeamPage.css';

import test from '../images/masterclass1.jpg';

function TeamPage (){
    return (
        <>
        <div className='team-container'>

            <div className='team-bg-image'>
                <div className='meet-team-text d-flex justify-content-center align-items-center 
                bg-dark opacity-8 mx-auto'> 
                    <h1 className=' text-main-light jura-font m-0'>
                        Γνώρισε την ομάδα μας
                    </h1>
                </div>
            </div> 
            {/* TEAM BG IMAGE */}

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

        </div>
        </>   
    );
}

export default TeamPage;