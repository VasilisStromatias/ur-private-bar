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

        <div className='gallery-container container p-5 m-5
        mx-auto d-flex flex-column justify-content-center'>
            <div className='row'>
                <div className='gallery-item col-md-6 col-sm-12 col-lg-4'>
                    <img src={zachos} />
                </div>

                <div className='gallery-item col-md-6 col-sm-12 col-lg-4'>
                    <img src={yellow} />
                </div>

                <div className='gallery-item col-md-6 col-sm-12 col-lg-4'>
                    <img src={test} />
                </div>

                <div className='gallery-item col-md-6 col-sm-12 col-lg-4'>
                    <img src={cocktail1 } />
                </div>

                <div className='gallery-item col-md-6 col-sm-12 col-lg-4'>
                    <img src={zachos } />
                </div>

                <div className='gallery-item col-md-6 col-sm-12 col-lg-4'>
                    <img src={cocktail } />
                </div>
            </div> {/* ROW */}

        </div>

        </>
    );

}

export default GalleryPage;