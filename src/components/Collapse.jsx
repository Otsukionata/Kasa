import React, { useState } from "react";
import Chevron from "../assets/arrowUp.png";

export default function Collapse({ description, title }) {
  const [toggle, setToggle] = useState(false);
  const [elemHeight, setElemHeight] = useState();

  return (
    <div className="accordeon" key={Math.random()}>
      <button
        className="accordeon__visible"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <span>{title}</span>
        <img src={Chevron} className={toggle ? "active" : undefined} alt="" />
      </button>
      <div
        className={toggle ? "accordeon__toggle active" : "accordeon__toggle"}
        style={{ height: toggle ? `${elemHeight}` : "0px" }}
      >
        <p aria-hidden={toggle ? "false" : "true"}>{description}</p>
      </div>
    </div>
  );
}
