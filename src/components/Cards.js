import React from 'react'
import CardItem from "./CardItem"
import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
      <h1>check out thses epic destinations</h1>
      <div className="cards___container">
      <div className="cards__wrapper">
      <ul className="cards__items">
      <CardItem
      src="/videos/img-9.jpg"
      text= "dummy text"
      label= "adventure"
      path="usluge" />
      <CardItem
      src="/videos/img-9.jpg"
      text= "dummy text"
      label= "adventure"
      path="usluge" />
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Cards
