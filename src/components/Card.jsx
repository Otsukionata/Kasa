import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, cover, title }) {
  return (
    <Link id={id} className="cards__thumbnail" to={`housing/${id}`}>
      <img src={cover} alt="" className="cards__img" />
      <div className="cards__title">
        <p className="cards__title--txt">{title}</p>
      </div>
    </Link>
  );
}
