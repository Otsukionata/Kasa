import { Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";

// Import des pages
import Home from "./pages/Home";
import About from "./pages/About";
import Appartement from "./pages/Flat";
import ErrorPage from "./pages/ErrorPage";

// Import des composants
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Router() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="housing/:id" element={<Appartement />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
