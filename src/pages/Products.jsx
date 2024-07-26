import { useEffect, useState } from "react";

import { getProducts } from '../api.js';
import ProductCard from '../ui/ProductCard.jsx';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <main>
            <section>
                <h1>
                    Some products here
                </h1>
            </section>
            <section>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </section>
        </main>
    );
}

export default Products;