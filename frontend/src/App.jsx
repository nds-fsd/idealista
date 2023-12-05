import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import RealEstateList from "./components/realestates/realestateslist/RealEstatesList";
import RealEstateListElement from "./components/realestates/realestatelistelement/RealEstateListElement";
import style from "./App.module.css";


function App() {
    return (
      <>
        Your App here
        <div className={style.app}>
          <nav className={style.nav}>
            <lu>
              <li><Link to="/realestates">Buscador inmuebles</Link></li>
              <li><Link to="/realestates/1">Inmueble</Link></li>
            </lu>
          </nav>
          <div className={style.components}>
            <Routes>
              <Route path="/realestates" element={<RealEstateList/>}></Route>
              <Route path="/realestates/:id" element={<RealEstateListElement/>}></Route>
            </Routes>
          </div>
        </div>
      </>
  )
}

export default App;