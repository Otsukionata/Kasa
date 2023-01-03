import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import FlatDetail from "./pages/FlatDetail";
import ErrorPage from "./pages/ErrorPage";

export default function Router() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="housing/:id" element={<FlatDetail />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
}
