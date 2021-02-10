import React from 'react'
import "./Footer.css"
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
import {Link} from "react-router-dom"
init("user_aA2UgjKNawzlffIXMWDFo");
const Scroll = require('react-scroll');
    const scroll = Scroll.animateScroll;

export default function Footer(props){
  function sendEmail(e) {
    e.preventDefault();
  
  emailjs.sendForm('service_nayx53a', 'template_fjkj6ko', e.target, 'user_aA2UgjKNawzlffIXMWDFo')
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    e.target.reset();
}
    return(
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
        Kontakt
        </p>
        <p className="footer-subscription-text">     
        Ukoliko imate bilo kakvih upita slobodno nam se obratite putem naše kontakt forme 
        </p>
        <div className="input-areas">
          <form onSubmit={sendEmail}>
            <label>
            <input type="text" name="name" placeholder="Puno ime" className="footer-input" />
            </label>
            <label>
            <input type="email" name="email" placeholder="Vaš e-mail" className="footer-input" />
            </label>
            <label>
            <input type="number" name="phone" placeholder="Broj Telefona" className="footer-input" />
            </label>
            <label>
            <textarea type="text" name="message" placeholder="Unesite vašu poruku" className="footer-txt"></textarea>
            </label>
            <label className="footer-btn">
            <input type="submit" className="btn" value="POŠALJI UPIT" />
            </label>
          </form>
        </div>
        </section> 
        <section className="footer-info">
        <div >
         <h className="footer-info-logo" style={{color: "white"}}>OPG Goluža <i className="fas fa-seedling" /></h>
         <div className="footer-info-area">
          <h5 className="footer-info-cont" style={{color: "white"}}>Email:
          <a  href="mailto:blazevic.marin747@gmail.com" style={{color: "white", textDecoration: "none"}}>OPGgoluza@gmail.com</a></h5>
          <h5 className="footer-info-cont" style={{color: "white"}}>Telefon: 
          <a  href="tel:+353830070770" style={{color: "white", textDecoration: "none"}}>+353830070770</a></h5>          
        </div>
        <Link to="/privatnost" className="priv" onClick={() =>{scroll.scrollToTop();}}>Politika privatnosti</Link>  
        </div>
      </section>
          </div>
    );
  }
