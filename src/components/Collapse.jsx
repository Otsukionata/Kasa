import React, { useState } from "react";
import Chevron from "../assets/arrowUp.png";

export default function Collapse({ description, title }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="accordeon">
      <div
        key={Math.random()}
        className="accordeon__trigger"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <p>{title}</p>
        <img src={Chevron} className={toggle ? "active" : undefined} alt="" />
      </div>
      {toggle && (
        <div className={`accordeon__toggle ${open ? "active" : "inactive"}`}>
          <p aria-hidden={toggle ? "false" : "true"}>{description}</p>
        </div>
      )}
    </div>
  );
}
