
import Logo from "./images/logo.svg"
import Styles from "./navbar.css"

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
            <a className="navbar-brand" href='#' >
                <img style={{height: '50px'}} src={Logo} alt="logo" />
                <span id="zapare">Zapare Technologies</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link active" href="refresh">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="refresh">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="refresh">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="refresh">Career</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="refresh">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    
    );
}

export default Navbar;