import React from 'react';
import {useState , useEffect} from 'react';
import '../css/EshopPage.css';


function EshopPage () {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/api/get")
        .then(res => res.json())
        .then (
            (result)=>{
                setIsLoaded(true);
                setItems(result);
            },

            (error) =>{
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error){
        return <div>Error: {error.message}</div>;
    }else if (!isLoaded){
        return <div>Loading...</div>;
    }else {
        return(
            <>
            <h1 className='text-light jura-font'>Products</h1>
            <article className='text-light jura-font'>
                {items.map(item =>(
                    <div className='border' key={item.productId}>
                        <h1>{item.productName}</h1>
                        <h3>{item.productInfo}</h3>
                        <p>Price: {item.productPrice} euro</p>
                        <p>Inventory: {item.inventory} left</p>
                    </div>
                ))}
            </article>



            </>
        );
    }
}

export default EshopPage;
