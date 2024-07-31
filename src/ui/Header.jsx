import { Link } from "react-router-dom";

function Header() {
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
                        <input style={{borderRadius: '10px'}} className="btn btn-primary" type="submit" placeholder="Find" />
                    </form>
                </div>
                <div className="col-1 d-flex" style={{justifyContent: 'space-between'}}>
                    <button style={{border: "0px", background: 'white'}}>Geolocation</button>
                    <button className="btn btn-warning">Cart</button>
                </div>
            </div>
        </header>
    );
}

export default Header;