import React from 'react'
import "./Footer.css"
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
init("user_aA2UgjKNawzlffIXMWDFo");

export default function Footer(){
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
            <textarea type="text" name="message" placeholder="Unesite vašu poruku" className="footer-input2"></textarea>
            </label>
            <label className="footer-btn">
            <input type="submit" className="btn" value="POŠALJI UPIT" />
            </label>
          </form>
        </div>
        </section> 
        <section className="footer-info">
        <div >
         <h3 className="footer-info-logo" style={{color: "white"}}>OPG Goluža</h3>
         <div className="footer-info-area">
          <h5 className="footer-info-cont" style={{color: "white"}}>Email: neki@email.com</h5>
          <h5 className="footer-info-cont" style={{color: "white"}}>Telefon: 09XXXXXXXX</h5>
         </div>
        </div>
      </section>
          </div>
    );
  }
