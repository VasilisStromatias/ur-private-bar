import React from 'react';
import '../css/EshopPage.css';

function EshopPage () {
    
    fetch('http://localhost:3002/api/get',{
        method: 'GET'
    })
    .then (response => response.json())
    .then(data => console.log(data))

    return(
        <>
        <h1>This is the Eshop Page</h1>
        </>
    );
}

export default EshopPage;
