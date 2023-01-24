import React, { Fragment, useState } from "react";

import LeftArrow from "../assets/arrowLeft.svg";
import RightArrow from "../assets/arrowRight.svg";

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {pictures.length === 1 ? (
        ""
      ) : (
        <img
          className="carousel__navigation left"
          src={LeftArrow}
          onClick={goPrevious}
          alt="photo précédente"
        />
      )}
      <div className="carousel__img">
        {pictures.map((image, index) => {
          return (
            <React.Fragment key={Math.random()}>
              {index === currentIndex && (
                <img
                  className="carousel__img"
                  src={pictures[currentIndex]}
                  alt=""
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <span className="carousel__count">
        {currentIndex + 1} / {pictures.length}
      </span>
      {pictures.length === 1 ? (
        ""
      ) : (
        <img
          className="carousel__navigation right"
          src={RightArrow}
          onClick={goNext}
          alt="photo suivante"
        />
      )}
    </div>
  );
}
