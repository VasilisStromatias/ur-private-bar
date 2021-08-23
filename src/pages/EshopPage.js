import React from 'react';
import {useState , useEffect} from 'react';
import '../css/EshopPage.css';

function EshopPage () {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [inventory,setInventory]=useState('');

    useEffect(() => {
        fetch("http://localhost:3002/api/get")
        .then(res => res.json())
        .then (
            (result)=>{
                setIsLoaded(true);
                setItems(result);
                console.log(result);
            },

            (error) =>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    if (error){
        return <div>Error: {error.message}</div>;
    }else if (!isLoaded){
        return <div>Loading...</div>;
    }else {
        return(
            <>
            <h1 className='title-products text-light jura-font
            text-center'>Products</h1>
            <article className='text-light jura-font'>
                {items.map(item =>(
                    <div className='border-bottom container item-container
                    d-flex align-items-center justify-content-between
                    px-5' key={item.productId}>
                        <div>
                            <h1 className='item-name'>{item.productName}</h1>
                            <h3 className='item-info'>{item.productInfo}</h3>
                        </div>
                        <div className=''>
                            <p className='item-price'>Price: {item.productPrice} €</p>
                            <p className='item-inventory'>Inventory: {item.inventory} left</p>
                            <button className='item-button btn btn-warning'>Add to cart</button>
                        </div>

                    </div>
                ))}
            </article>



            </>
        );
    }
}

export default EshopPage;
