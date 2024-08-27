import { Link } from "react-router-dom";

import style from './Header.module.css';

function Header() {

    const openCartEvent = (e) => {

    }

    return (
        <header className="container-fluid" style={{marginTop: '20px'}}>
            <div className="row" style={{justifyContent: 'space-evenly'}}>
                <div className="col-1">
                    <h4>
                        <Link className="navbar-brand" to={"/"}>Django Store</Link>
                    </h4>
                </div>
                <div className="col-6 d-flex" style={{alignContent: 'center'}}>
                    <button className="btn btn-primary " style={{borderRadius: '10px'}}>
                        Seacrh by categories
                    </button>
                    <form className="d-flex" style={{"background": "blue", width: '570px', borderRadius: '10px'}} role="search" >
                        <input className="form-control me-1" style={{border: "2px solid blue"}} type="search" placeholder="Search products" />
                        <button style={{borderRadius: '10px'}} className="btn btn-primary" type="submit" placeholder="Find">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="col-1 d-flex" style={{justifyContent: 'space-between'}}>
                    <h1 className={style.metaBtn}>
                        <svg className={style.metaBtn__svg + " bi bi-geo-alt-fill"} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="yellow" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                    </h1>
                    <h1 className={style.metaBtn} onClick={openCartEvent}>
                        <svg className={style.metaBtn__svg + " bi bi-cart-fill"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="yellow" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </h1>
                </div>
            </div>
        </header>
    );
}

export default Header;