import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    const Scroll = require('react-scroll');
    const scroll = Scroll.animateScroll;
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
                <Link to ="/" className="navbar-logo" onClick={() =>{closeMobileMenu();scroll.scrollToTop();}}>
                    OPG Goluža
                    <i class="fas fa-seedling" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />  
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to ="/" className="nav-links" onClick={() =>{closeMobileMenu();scroll.scrollToTop();}}>
                            Početna
                         </Link>   
                    </li>
                    <li className="nav-item">
                        <Link to ="/usluge" className="nav-links" onClick={() =>{closeMobileMenu();scroll.scrollToTop();}}>
                            Usluge
                         </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/o_nama" className="nav-links" onClick={() =>{closeMobileMenu();scroll.scrollToTop();}}>
                            O nama
                         </Link>   
                    </li>
                    <li className="nav-item">
                        <Link 
                             className="nav-links" onClick={() =>{closeMobileMenu();scroll.scrollToBottom();}}>
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
