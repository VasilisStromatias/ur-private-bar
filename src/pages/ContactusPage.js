import React from 'react';
import '../css/ContactusPage.css';

function ContactusPage (){
    return (
        <>
    <div className='contact-container'>
            
            <div className='contact-us-text d-flex justify-content-center align-items-center 
                bg-dark opacity-8 mx-auto'> 
                <h1 className=' text-main-light jura-font m-0'>
                    Επικοινώνηστε μαζί μας
                </h1>
            </div>

        <div className='d-flex justify-content-center'>

            <div className='contact-form-container border bg-dark opacity-5
            my-5'> 

            </div> {/* CONTACT FORM CONTAINER */}

            <form className='border d-flex flex-column justify-content-center align-items-center 
            my-5'>
                <div className='my-4'> 
                    <h1 className='text-light jura-font'>Φόρμα Επικοινωνίας</h1>
                    <p className='text-danger text-center anavailable-text'>Currently anavailable</p>
                </div>

                <label className='label-name text-light jura-font w-50'>Name</label>
                <input 
                type='text' 
                name='name' 
                placeholder='Your name...'
                className='input-name w-50 my-2'/>

                <label className='label-email text-light jura-font w-50'>E-mail</label>
                <input 
                type='text' 
                name='email' 
                placeholder='example@example.gr'
                className='input-email w-50 my-2'/>

                <label className='label-message text-light jura-font w-50'>Your message</label>
                <input 
                type='textarea' 
                name='message' 
                placeholder='Your message here...'
                className='input-message w-50 h-25 my-2'/>

                <input type='submit' name='submit' className=' jura-font my-5'/>

            </form>

        </div>

    </div> {/* CONTACT CONTAINER */}
        </>   
    );
}

export default ContactusPage;