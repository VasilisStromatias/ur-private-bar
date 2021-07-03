import React from 'react';

import '../css/GalleryPage.css';

import zachos from '../images/zachos.jpg'
import cocktail from '../images/cocktail500x300.jpg'
import test from '../images/test.jpg'
import cocktail1 from '../images/cocktail1.jpg'
import yellow from '../images/bar-service-1.jpg'



function GalleryPage(){
    return(
        <>

        <div className='gallery-heading'>
            <h1 className='text-main-light text-center'>Gallery</h1>
        </div>

        <div className='gallery-container p-4 m-4
        d-flex flex-column justify-content-center text-center'>

            <div className='row'>

                <div className='gallery-item my-4
                col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-4'>
                    <img src={zachos} alt='test-images'  />
                </div>

                <div className='gallery-item my-4
                col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-4'>
                    <img src={yellow} alt='test-images' />
                </div>

                <div className='gallery-item my-4
                col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-4'>
                    <img src={test} alt='test-images' />
                </div>

                <div className='gallery-item my-4
                col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-4'>
                    <img src={cocktail1 } alt='test-images' />
                </div>

                <div className='gallery-item my-4
                col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-4'>
                    <img src={zachos } alt='test-images' />
                </div>

                <div className='gallery-item my-4
                col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-4'>
                    <img src={cocktail } alt='test-images' />
                </div>
            </div> {/* ROW */}

        </div>

        </>
    );

}

export default GalleryPage;