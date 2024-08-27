import { useEffect, useState } from "react";
import { getProductsDetail } from "../api";



function Detail({ id }) {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const getDetail = () => {
            const data = getProductsDetail(id);
            setDetail(data)
        }
    }, [])
    
    return (
        <main>
            
        </main>
    )
}

export default Detail;