import { useEffect, useState } from "react";
import { getProductsDetail } from "../api";



function Detail(props) {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const getDetail = () => {
            const data = getProductsDetail(props.match.id);
            return data;
        }
        setDetail(getDetail());
    }, [])

    return (
        <main>
            
        </main>
    )
}

export default Detail;