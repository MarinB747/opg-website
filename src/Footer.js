import React from 'react'
import { Button } from "./components/button" 
import "./Footer.css"
import "./components/button";


function Footer() {
  
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
        Kontakt
        </p>
        <p className="footer-subscription-text">     
        Ukoliko imate bilo kakvih upita slobodno nam se obratite putem naše kontakt forme 
        </p>
        <div className="input-areas">
          <form className="footer_input">
            <input type="name" name="name" placeholder ="Vaše ime"
            className="footer-input"/>
             <input type="email" name="email" placeholder ="Vaš e-mail"
            className="footer-input"/>
             <input type="txt" name="number" placeholder ="Vaš telefon"
            className="footer-input"/>
          </form>
          <form>
          <input type="txt" name="txt" placeholder ="Unesite vašu poruku"
            className="footer-input2" />
          </form>
          <div className="footer-btn">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          POŠALJI UPIT
        </Button>
        </div>
        </div>
      </section>
      <section className="footer-info">
        <div >
         <h3 className="footer-info-logo" style={{color: "white"}}>OPG Goluža</h3>
         <div className="footer-info-area"><h5 className="footer-info-cont" style={{color: "white"}}>Email: neki@email.com</h5>
         <h5 className="footer-info-cont" style={{color: "white"}}>Telefon: 09XXXXXXXX</h5>
         </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
