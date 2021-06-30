import React from 'react';
import '../css/MasterclassPage.css';

import masterclass from '../images/masterclass1.png';

function MasterclassPage (){
    return (
        <>
        <div className='masterclass-page-title d-flex justify-content-center align-items-center'>
            <h1 className='text-main-light'>Masterclasses</h1>
        </div>

        <div className='masterclass-container jura-font
        '>

            <div className='masterclass-item text-main-light 
            d-flex flex-column align-items-center
            justify-content-around my-5
            '>

                    <img src={masterclass} alt='masterclassImage'
                    className='masterclass-image' />

                <div className='masterclass-text text-center'>
                    <h2 className='masterclass-title'>Masterclass Title</h2>
                    <p className='masterclass-information mx-auto'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus et molestie odio. Maecenas lobortis ornare nibh, nec tempor nibh 
                    accumsan vitae. Vestibulum tellus dolor, scelerisque non mauris vitae, viverra
                    blandit elit. Proin aliquam sem non ligula consectetur viverra. Praesent vel
                    molestie sapien. In dictum consectetur convallis. In consectetur libero a 
                    pretium blandit.</p>
                </div>

            </div> {/* MASTERCLASS ITEM */}

            <div className='masterclass-item text-main-light 
            d-flex flex-column align-items-center 
            justify-content-around my-5
            '>

                    <img src={masterclass} alt='masterclassImage'
                    className='masterclass-image' />

                <div className='masterclass-text text-center'>
                    <h2 className='masterclass-title'>Masterclass Title</h2>
                    <p className='masterclass-information mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus et molestie odio. Maecenas lobortis ornare nibh, nec tempor nibh 
                    accumsan vitae. Vestibulum tellus dolor, scelerisque non mauris vitae, viverra
                    blandit elit. Proin aliquam sem non ligula consectetur viverra. Praesent vel
                    molestie sapien. In dictum consectetur convallis. In consectetur libero a 
                    pretium blandit. Praesent at augue neque. Duis facilisis at tellus vitae
                    maximus. Aenean at semper odio, ut cursus odio. Pellentesque convallis 
                    iaculis sapien in cursus.Pellentesque scelerisque, sem ut mattis varius, 
                    lorem diam sagittis ex, at dictum felis nisi ut elit. Proin hendrerit,</p>
                </div>

            </div> {/* MASTERCLASS ITEM */}

            <div className='masterclass-item text-main-light 
            d-flex flex-column align-items-center
            justify-content-around my-5
            '>

                    <img src={masterclass} alt='masterclassImage'
                    className='masterclass-image' />

                <div className='masterclass-text text-center'>
                    <h2 className='masterclass-title'>Masterclass Title</h2>
                    <p className='masterclass-information mx-auto'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus et molestie odio. Maecenas lobortis ornare nibh, nec tempor nibh 
                    accumsan vitae. Vestibulum tellus dolor, scelerisque non mauris vitae, viverra
                    blandit elit. Proin aliquam sem non ligula consectetur viverra. Praesent vel
                    molestie sapien. In dictum consectetur convallis. In consectetur libero a 
                    pretium blandit. Praesent at augue neque. Duis facilisis at tellus vitae
                    maximus. Aenean at semper odio, ut cursus odio. Pellentesque convallis 
                    iaculis sapien in cursus.Pellentesque scelerisque, sem ut mattis varius, 
                    lorem diam sagittis ex, at dictum felis nisi ut elit. Proin hendrerit,
                    leo nec fringilla egestas, arcu odio gravida lacus, non bibendum sem tortor 
                    vel est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin
                    enim, elementum tincidunt risus in, sagittis rutrum nulla. Fusce diam 
                    ante, semper sit amet elit dictum, condimentum sodales odio. Nullam eget
                    tincidunt arcu. Integer semper tempus lacus, ut viverra sapien maximus eu.
                    Proin malesuada, felis lobortis maximus semper, justo nisi tincidunt ligula, non scelerisque lectus orci
                    non erat. Fusce volutpat, purus non consectetur dictum, velit lorem blandit odio, 
                    sit amet feugiat velit turpis in massa. Integer lacus magna, volutpat id quam at, fringilla commodo justo. Etiam non metus pretium, aliquet risus vel, eleifend velit. Curabitur et nunc vitae purus malesuada sodales.
                    Donec sed dignissim sem, sed sollicitudin arcu. Nulla facilisi.</p>
                </div>

            </div>


        </div> {/* MASTERCLASS ITEM */}
        </>   
    );
}

export default MasterclassPage;