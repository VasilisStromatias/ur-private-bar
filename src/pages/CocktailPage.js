import React from 'react';
import '../css/CocktailPage.css';

import cocktail from '../images/test.jpg';

function CocktailPage (){
    return (
        <>
    <div className='cocktail-container jura-font container'>

            <div className='cocktail-list-title d-flex justify-content-center text-light' >
                <h1 className='m-0'>Cocktail List</h1>
            </div>

       
            
            <div className='image d-flex justify-content-around 
            align-items-center my-5
            row'>
                
                <div className='text-center my-4 
                col-sm-12 col-md-6 col-lg-4
                cocktail-item'>
                    <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                    <div className='d-flex flex-column text-center mt-4'>
                        <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                        <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                    </div>
                </div>
                {/* COCKTAIL-ITEM */}

                <div className='text-center my-4 
                col-sm-12 col-md-6 col-lg-4
                cocktail-item'>
                    <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                    <div className='d-flex flex-column text-center mt-4'>
                        <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                        <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                    </div>
                </div>
                {/* COCKTAIL-ITEM */}

                <div className='text-center my-4 
                col-sm-12 col-md-6 col-lg-4
                cocktail-item'>
                    <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                    <div className='d-flex flex-column text-center mt-4'>
                        <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                        <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                    </div>
                </div>
                {/* COCKTAIL-ITEM */}

                <div className='text-center my-4 
                col-sm-12 col-md-6 col-lg-4
                cocktail-item'>
                    <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                    <div className='d-flex flex-column text-center mt-4'>
                        <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                        <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                    </div>
                </div>
                {/* COCKTAIL-ITEM */}

                <div className='text-center my-4 
                col-sm-12 col-md-6 col-lg-4
                cocktail-item'>
                    <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                    <div className='d-flex flex-column text-center mt-4'>
                        <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                        <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                    </div>
                </div>
                {/* COCKTAIL-ITEM */}

                <div className='text-center my-4 
                col-sm-12 col-md-6 col-lg-4
                cocktail-item'>
                    <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                    <div className='d-flex flex-column text-center mt-4'>
                        <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                        <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                    </div>
                </div>
                {/* COCKTAIL-ITEM */}

            </div>  {/* ROW */}


            <div className='download-menu-button-container'>
                <button className='download-menu-button btn btn-warning w-75'>
                    <a href='#' 
                    className='download-menu-link'>
                        Download the menu here
                    </a>
                </button>
            </div>
        </div> {/* COCKTAILS LIST CONTAINER */}
    
        </>   
    );
}

export default CocktailPage;