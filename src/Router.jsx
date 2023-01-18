import { Routes, Route } from "react-router-dom";
import React from "react";

// Import des pages
import Home from "./pages/Home";
import About from "./pages/About";
import Appartement from "./pages/FlatDetail";
import ErrorPage from "./pages/ErrorPage";

// Import des composants
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Router() {
  return (
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="housing/:id" element={<Appartement />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  );
}
