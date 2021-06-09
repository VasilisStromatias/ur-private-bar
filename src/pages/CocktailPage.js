import React from 'react';
import '../css/CocktailPage.css';

import cocktails1 from '../images/cocktails3.png';
import cocktail from '../images/test.jpg';

function CocktailPage (){
    return (
        <>
        <div className='cocktail-container jura-font container'>

            <div className='image d-flex justify-content-center' >
                <img src={cocktails1} alt='cocktail-1'/>
            </div>

            
            <div className='image d-flex justify-content-around align-items-center'>

                <img src={cocktail} alt='cocktail-2' className='cocktail'/>
                
                <div className='d-flex flex-column text-center text-main-yellow'>
                    <h2>Cocktail Name</h2>
                    <p>lime, strawberry, gin, olives, vodka</p>
                </div>
                    
            </div>            

        </div>
        </>   
    );
}

export default CocktailPage;