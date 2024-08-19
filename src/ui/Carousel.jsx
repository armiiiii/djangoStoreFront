import { useRef, useState } from "react";

function Carousel(props) {
    const [images, setImages] = useState(props.images);
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
        <div>
            <button onClick={handleImageChange} role="back" />
            <img className="card-img-top" src={images[index].image} ref={currImage} alt={props.title} />
            <button onClick={handleImageChange} role="forward" />
        </div>
    );
}

export default Carousel;