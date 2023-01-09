import React from "react";
import { useParams } from "react-router-dom";

import appartmentList from "../data/logements.json";

import ErrorPage from "./ErrorPage";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Ratings from "../components/Ratings";

export default function Flat() {
  const { id } = useParams();
  const getFlat = appartmentList.find((appartment) => {
    return appartment.id === id;
  });

  if (getFlat === undefined) {
    return <ErrorPage />;
  }

  return (
      <main>
        <Slideshow pictures={getFlat.pictures} />
        <div className="flat">
          <div className="flat__details">
            <h1>{getFlat.title}</h1>
            <h2>{getFlat.location}</h2>
            <div className="flat__tags">
              {getFlat.tags.map((tag) => (
                <div
                  className="flat__tagTxt"
                  key={`${getFlat.tags}-${Math.random()}`}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="flat__profile">
            <div className="flat__profile--infos">
              <p>{getFlat.host.name}</p>
              <div className="flat__profile--infos picture">
                <img
                  src={getFlat.host.picture}
                  alt="Photo de profil"
                  className="carousel__img"
                />
              </div>
            </div>
            <div className="flat__profile--ratings">
              <Ratings rating={getFlat.rating} />
            </div>
          </div>
        </div>
        <div className="accommodations">
          <Collapse
            className={"accommodations__txt"}
            title={"Description"}
            description={getFlat.description}
          />
          <Collapse
            className={"accommodations__txt"}
            title={"Équipements"}
            description={getFlat.equipments.map((item) => (
              <li key={Math.random()}>{item}</li>
            ))}
          />
        </div>
      </main>
  );
}
