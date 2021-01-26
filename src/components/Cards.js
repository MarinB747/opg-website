import React from 'react'
import CardItem from "./CardItem"
import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
      <h1>Sto nudimo</h1>
      <div className="cards___container">
      <div className="cards__wrapper">
      <ul className="cards__items">
      <CardItem
      src="/videos/img-1.jpg"
      text= "dummy text"
      label= "Usluge"
      path="/usluge" />
      <CardItem
      src="/videos/img-2.jpg"
      text= "dummy text"
      label= "O nama"
      path="/o_nama" />
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Cards
