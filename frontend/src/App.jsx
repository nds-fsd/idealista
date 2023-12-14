import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RealEstateList from "./components/realestates/realestateslist/RealEstatesList";
import RealEstateListElement from "./components/realestates/realestatelistelement/RealEstateListElement";
import style from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <nav className={style.nav}>
          <ul>
            <li>
              <Link to="/realestates">Buscador Inmuebles</Link>
            </li>
            <li>
              <Link to="/realestates/1">Inmueble</Link>
            </li>
          </ul>
        </nav>
        <div className={style.components}>
          <Routes>
            <Route path="/realestates" element={<RealEstateList />} />
            <Route path="/realestates/:id" element={<RealEstateListElement />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;