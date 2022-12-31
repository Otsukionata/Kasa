import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={Logo} alt="Logo Kasa" className="footer__logo" />
      </Link>
      <p className="footer__txt">© 2020 Kasa. Tous droits réservés</p>
    </footer>
  );
}
