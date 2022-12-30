import React from "react";
import Image from "../assets/victor-martin-2FM7RP20SHQ-unsplash.jpg";
import Card from "../components/Card";
import Flats from "../data/logements.json";

export default function Home() {
  return (
    <main>
      <div className="cover">
        <p className="cover__txt">Chez vous, partout et ailleurs</p>
        <img src={Image} alt="" className="cover__img" />
      </div>
      <div className="gallery"></div>
      {Flats.map(({ id, title, cover }) => (
        <Card key={id} title={title} id={id} cover={cover} />
      ))}
    </main>
  );
}
