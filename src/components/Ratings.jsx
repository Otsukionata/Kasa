import React from "react";
import Star from "../assets/GrayStar.svg";

export default function Ratings(rate) {
  // La note de l'appartement
  const range = [1, 2, 3, 4, 5];

  return range.map((rangeElem, index) =>
    rangeElem >= rate.rating ? (
      <img src={Star} key={index} className="gray-star" alt="" />
    ) : (
      <img src={Star} key={index} className="red-star" alt="" />
    )
  );
}
