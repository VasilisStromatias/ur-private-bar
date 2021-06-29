import React from 'react';
import '../css/CocktailPage.css';

import cocktail from '../images/test.jpg';

function CocktailPage (){
    return (
        <>
    <div className='cocktail-container jura-font container'>

            <div className='cocktail-list-title d-flex justify-content-center text-light' >
                <h1 className='display-4'>Cocktail List</h1>
            </div>

        <div className='row'>
            
            <div className='image d-flex justify-content-around align-items-center my-5
            col-sm-12'>

                <img src={cocktail} alt='cocktail-2' className='cocktail'/>
                
                <div className='d-flex flex-column text-center'>
                    <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                    <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                </div>

                <img src={cocktail} alt='cocktail-2' className='cocktail'/>
                
                <div className='d-flex flex-column text-center'>
                    <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                    <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                </div>
                    
            </div>  {/*COCKTAILS LIST LINE 1 */}        
             

            <div className='image d-flex justify-content-around align-items-center my-5
            col-sm-12'>

                <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                <div className='d-flex flex-column text-center'>
                    <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                    <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                </div>

                <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                <div className='d-flex flex-column text-center'>
                    <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                    <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                </div>

            </div> {/*COCKTAILS LIST LINE 2 */}
            <div className='image d-flex justify-content-around align-items-center my-5'>

                <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                <div className='d-flex flex-column text-center'>
                    <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                    <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                </div>

                <img src={cocktail} alt='cocktail-2' className='cocktail'/>

                <div className='d-flex flex-column text-center'>
                    <h2 className='cocktail-title text-main-yellow'>Cocktail Name</h2>
                    <p className='cocktail-ingredients text-main-light'>lime, strawberry, gin, olives, vodka</p>
                </div>

                </div> {/*COCKTAILS LIST LINE 3 */}
        </div> {/* COCKTAILS LIST CONTAINER */}
    </div> {/* CONTAINER */}
    
        </>   
    );
}

export default CocktailPage;