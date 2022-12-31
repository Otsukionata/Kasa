import React, { useState } from "react";
import Icon from "../assets/arrowUp.png";

export default function Collapse({ description, title }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="about__panel">
      <div
        key={Math.random()}
        className="dropdown__toggle"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <p>{title}</p>
        <img src={Icon} alt="" />
      </div>
      {toggle && (
        <div className={`about__arrow ${open ? "active" : "inactive"}`}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
