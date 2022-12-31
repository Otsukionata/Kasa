import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="error">
      <h1 className="error__code">404</h1>
      <h2 className="error__txt">
        Oups ! La page que vous demandez n'existe pas.
      </h2>
      <Link className="error__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}
