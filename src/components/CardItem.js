import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item--link" to={props.path}>
          <figure
            className="cards__item--pic--wrap"
            data-category={props.label}
          >
            <img className="cards__item--img" alt="/" src={props.src} />
          </figure>
          <div className="cards__item--info">
            <h5 className="cards__item--text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
