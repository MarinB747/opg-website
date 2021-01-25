import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./button.js";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const[button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };
    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
                    OPG Goluža <i className="fab fa-typo3" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />  
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to ="/" className="nav-links" onClick={closeMobileMenu}>
                            Početna
                         </Link>   
                    </li>
                    <li className="nav-item">
                        <Link to ="/usluge" className="nav-links" onClick={closeMobileMenu}>
                            Usluge
                         </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/about" className="nav-links" onClick={closeMobileMenu}>
                            O nama
                         </Link>   
                      
                    </li>
                    <li className="nav-item">
                        <Link to ="/kontakt" className="nav-links" onClick={closeMobileMenu}>
                            Kontakt
                         </Link>   
                    </li>
                </ul>   
            </div>
        </nav>
        </>
    )
}


export default Navbar
