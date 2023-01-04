import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";

export default function FlatDetail({ id }) {
  const { data } = useParams;

  useEffect(() => {
    fetch("../datas/logements.json").then((response) =>
      response
        .json()
        .then((flatData) => console.log(flatData))
        .catch((error) => console.error(error))
    );
  }, []);

  return (
    <main>
      <Slideshow />
      <div className="flat">
        <div className="flat__details">
          <h1>Magnifique appartement proche Canal Saint Martin</h1>
          <p className="test">Référence du logement : {data}</p>
          <h2>Île-de-France, Paris 10e</h2>
        </div>
      </div>
    </main>
  );
}
