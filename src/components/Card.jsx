import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, cover, title }) {
  return (
    <Link id={id} className="gallery_thumbnail" to={`housing/${id}`}>
      <img src={cover} alt={title} className="gallery__img" />
      <div className="gallery__txt">{title}</div>
    </Link>
  );
}
