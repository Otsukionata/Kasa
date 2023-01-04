import React from "react";
import Image from "../assets/victor-martin-2FM7RP20SHQ-unsplash.jpg";
import Card from "../components/Card";
import Flats from "../data/logements.json";

export default function Home() {
  return (
    <main>
      <div className="cover">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={Image} alt="" className="cover__img" />
      </div>
      <div className="cards">
        {Flats.map(({ id, title, cover }) => (
          <Card key={id} title={title} id={id} cover={cover} />
        ))}
      </div>
    </main>
  );
}
