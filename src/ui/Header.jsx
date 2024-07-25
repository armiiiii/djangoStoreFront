import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="container-fluid" style={{marginTop: '20px'}}>
            <div className="row" style={{justifyContent: "space-evenly"}}>
                <div className="col-1">
                    <h4>
                        <Link className="navbar-brand" to={"/"}>Django Store</Link>
                    </h4>
                </div>
                <div className="col-2" style={{alignContent: 'center'}}>
                    <button className="btn btn-primary btn-lg" style={{borderRadius: '10px'}}>Seacrh by categories</button>
                </div>
                <div className="col-5">
                    <form className="d-flex" style={{"background": "blue"}} role="search" >
                        <input className="form-control me-2" style={{border: "2px solid blue"}} type="search" placeholder="Search products" />
                        <input style={{borderRadius: '10px'}} className="btn btn-lg btn-primary" type="submit" placeholder="Find" />
                    </form>
                </div>
                <div className="col-1">
                    <button style={{border: "0px", background: 'white'}}>Geolocation</button>
                </div>
            </div>
        </header>
    );
}

export default Header;