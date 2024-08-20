import { useState } from 'react';

import Carousel from '../ui/Carousel.jsx';

import { deleteFromLocalStorage, updateLocalStorage, setItemToLocalStorage, getLocalStorage } from '../localStorageAPI.js';


function ProductCard({ product }) {

    const [inCart, setInCart] = useState(product.id in getLocalStorage('cart') ? true : false);
    const [inLikedProducts, setInLikedProducts] = useState(product.id in getLocalStorage('likedProducts') ? true : false);

    const likeBtn = inLikedProducts ? (
        <div className="btn-over-container right-top" onClick={() => {deleteFromLikedProductsEvent()}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
            </svg>
        </div>
    ) : (
        <div className='btn-over-container right-top' onClick={() => {addToLikedProductsEvent()}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
            </svg>
        </div>
    )

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
            <Carousel product={product} likeBtn={likeBtn}/>  
            <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">{product.description}</p>
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