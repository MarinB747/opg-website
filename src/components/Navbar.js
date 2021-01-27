import React, {useState, Component, useEffect,useRef} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./button.js";
import {render} from "react-dom"
import {scrollTo} from "scroll-js"
import {Link as scroll} from "react-scroll"
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
                <Link to ="/" className="navbar-logo" onClick={closeMobileMenu} onClick={scroll.scrollToTop}>
                    OPG Goluža
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />  
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to ="/" className="nav-links" onClick={closeMobileMenu} onClick={scroll.scrollToTop}>
                            Početna
                         </Link>   
                    </li>
                    <li className="nav-item">
                        <Link to ="/usluge" className="nav-links" onClick={closeMobileMenu} onClick={scroll.scrollToTop}>
                            Usluge
                         </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/o_nama" className="nav-links" onClick={closeMobileMenu} onClick={scroll.scrollToTop}>
                            O nama
                         </Link>   
                      
                    </li>
                    <li className="nav-item">
                        <Link 
                             className="nav-links" onClick={closeMobileMenu} onClick={scroll.scrollToBottom}>
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
