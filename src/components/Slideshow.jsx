import React, { Fragment, useState } from "react";
import Btn_Slider from "./Btn_Slider";

export default function Slideshow({ Slides }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== Slides.length) {
      setSlideIndex(setSlideIndex + 1);
    } else if (slideIndex === Slides.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(setSlideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Slides.length);
    }
  };

  return (
    <div className="slider__container">
      {Slides.map((object, index) => {
        const images = object.pictures;

        return (
          <div
            key={object.id}
            className={slideIndex === index + 1 ? "slide active_anim" : "slide"}
          ></div>
        );
      })}
      <Btn_Slider moveSlide={nextSlide} direction={"next"} />
      <Btn_Slider moveSlide={previousSlide} direction={"previous"} />
    </div>
  );
}
