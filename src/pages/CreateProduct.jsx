import { useState } from "react";

import { redirect } from "react-router-dom";

import { createProduct } from '../api.js';

function CreateProduct() {
    const [data, setData] = useState(
        {
            "owner": 1,
            "category": 1,
            "title": "",
            "description": "",
            "price": 0,
            "images": []
        }
    );

    const handleImageChoice = (e) => {
        console.log(e.target.files)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const create = async () => {
            console.log(data);
            console.log(await createProduct(data));
        }
        create();
    };

    return (
        <form style={{display: 'flex', flexDirection: 'column'}}>
        <input type="number" value={2} style={{display: 'none'}} />
            <input type="text" value="Transport" style={{display: 'none'}} />
            <input 
                onChange={e => setData(prevData => ({
                    ...prevData, title: e.target.value
                }))} 
                type="text"
                placeholder="Title of the product" 
                value={data.title} 
            />
            <input onChange={e => setData(prevData => ({
                    ...prevData, description: e.target.value
                }))} 
                type="text" 
                placeholder="Description of the product" 
                value={data.description}
            />
            <input type="number" placeholder="Add price" value={data.price} onChange={e => setData(prevData => ({
                    ...prevData, price: e.target.value
            }))}/>
            <input 
                onChange={e => setData(prevData => ({
                    ...prevData, images: e.target.files
                }))} 
                type="file" 
                placeholder="Image is required" 
                multiple
                accept="image/*,.png,.jpg,.gif"
            />
            <input onClick={handleSubmit} type="submit" />
        </form>
    );
}

export default CreateProduct;