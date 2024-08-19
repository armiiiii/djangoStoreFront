import { useState } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../ui/Carousel.jsx';


const getLocalStorage = (key) => {return JSON.parse(localStorage.getItem(key))}

const updateLocalStorage = (key, items) => {
    localStorage.setItem(key, JSON.stringify(items))
}

const setItemToLocalStorage = (key, item) => {
    const storage = getLocalStorage(key);
    const itemId = item.id;
    if (storage) {
        storage[itemId] = item
        localStorage.setItem(key, JSON.stringify(storage));
    } else {
        storage = {}
        storage[itemId] = item
        localStorage.setItem(key, JSON.stringify(storage));
    }
}

const deleteFromLocalStorage = (key, id) => {
    const storage = getLocalStorage(key);
    delete storage[id];
    return storage;
}


function ProductCard({ product }) {

    const [inCart, setInCart] = useState(product.id in getLocalStorage('cart') ? true : false);
    const [inLikedProducts, setInLikedProducts] = useState(product.id in getLocalStorage('likedProducts') ? true : false);

    const addToCartEvent = () => {
        setItemToLocalStorage('cart', product);
        setInCart(true);
    }

    const deleteFromCartEvent = () => {
        updateLocalStorage('cart', deleteFromLocalStorage('cart', product.id));
        setInCart(false);
    }

    const addToLikedProductsEvent = () => {
        setItemToLocalStorage('likedProducts', product);
        setInLikedProducts(true);
    }

    const deleteFromLikedProductsEvent = () => {
        updateLocalStorage('likedProducts', deleteFromLocalStorage('likedProducts', product.id));
        setInLikedProducts(false);
    }

    return (
        <article className="card m-2" style={{width: '18rem'}}>
            <Carousel images={product.images} title={product.title} /> { /* Title is used for alt in img tag */ } 
            {inLikedProducts ? (
                <button className="btn btn-danger" onClick={() => {deleteFromLikedProductsEvent()}}>Unlike</button>
            ) : (
                <button className='btn btn-success' onClick={() => {addToLikedProductsEvent()}}>Like</button>
            )}
            <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <Link to={`products/${product.id}/`} className='btn btn-primary'>Detail</Link>
                {inCart ? (
                    <button className='btn btn-danger' onClick={() => {deleteFromCartEvent()}}>Delete from cart</button>
                ) : (
                    <button className='btn btn-primary' onClick={() => {addToCartEvent()}}>Add to the cart</button>
                )}
            </div>
        </article>
    );
}

export default ProductCard;