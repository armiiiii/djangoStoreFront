import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Carousel({ product, likeBtn }) {
    const [images, setImages] = useState(product.images);
    const [index, setIndex] = useState(0); // Will be used to reference images array
    const currImage = useRef(null)

    const handleImageChange = (e) => { // First prototype of carousel logic
        if (e.target.role === "back") {
            if (index === 0) {
                setIndex(images.length - 1);
            } else {
                setIndex(index-1)
            }
        } else {
            if (index === images.length - 1) {
                setIndex(0);
            } else {
                setIndex(index+1);
            }
        }
    }

    return (
        <div style={{position: 'relative'}}>
            <Link to={`products/${product.id}`}>
                <img className="card-img-top" src={images[index].image} alt={product.title} />
            </Link>
            { likeBtn }
            <div className="btn-over-container left-middle"  onClick={handleImageChange} role="back">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
            </div>
            <div className="btn-over-container right-middle" onClick={handleImageChange} role="forward">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
            </div>
        </div>
    );
}

export default Carousel;