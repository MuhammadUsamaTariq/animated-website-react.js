
import { useEffect, useState } from "react";
import Logo from "./images/logo.svg"
import "./navbar.css"

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    const navbarStyles = {
        position: 'fixed',
        
        width: '100%',
        
        
        transition: 'top 0.6s'
    }
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    return (

        <nav id="nav-wrapper" style={{ ...navbarStyles, top: visible ? '0' : '-360px' }} className="navbar navbar-expand-lg navbar-light fixed-top transparent" >
            <a className="navbar-brand" href='#' >
                <img id="logo" src={Logo} alt="logo" />
                <span id="zapare">Zapare Technologies</span></a>
            <button id="toggle-btn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span id="toggle-btn" className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link active" href="#target-home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#target-aboutus">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-us-div">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#carrer-target">Career</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#care-to-join">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>



    );
}

export default Navbar;