import React from "react";

import LeftArrow from "../assets/arrowLeft.svg";
import RightArrow from "../assets/arrowRight.svg";

export default function Btn_Slider({ moveSlide, direction }) {
  return (
    <div>
      <button
        onClick={moveSlide}
        className={
          direction === "next" ? "btn-slide next" : "btn-slide previous"
        }
      >
        <img src={direction === "next" ? RightArrow : LeftArrow} alt="" />
      </button>
    </div>
  );
}
