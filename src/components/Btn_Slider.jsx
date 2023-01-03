import React from "react";

import LeftArrow from "../assets/arrowLeft.png";
import RightArrow from "../assets/arrowRight.png";

export default function Btn_Slider({ moveSlide, direction }) {
  return;
  <div>
    <button
      onClick={moveSlide}
      className={
        direction === "next" ? "btn__slide next" : "btn__slide previous"
      }
    >
      <img src={direction === "next" ? RightArrow : LeftArrow} alt="" />
    </button>
  </div>;
}
