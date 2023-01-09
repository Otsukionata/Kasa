import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/LOGO.svg";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Accueil Kasa" className="logo" />
      </Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À&nbsp;propos</NavLink>
      </nav>
    </header>
  );
}
