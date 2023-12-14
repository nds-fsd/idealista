import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import AppNav from "./components/app/appnav/AppNav";
import AppLayout from "./components/app/appLayout/AppLayout";
import Searcher from "./components/searchers/realestates/RealEstateSearcher";
import RealEstateList from "./components/realestates/realestateslist/RealEstatesList";
import RealEstateListElement from "./components/realestates/realestatelistelement/RealEstateListElement";

import style from "./App.module.css";



function App() {
    return (
      <BrowserRouter>
        <div>          
          <Routes>
              <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<Searcher />}></Route>
                <Route path="/realestates" element={<RealEstateList/>}></Route>
                <Route path="/realestates/:id" element={<RealEstateListElement/>}></Route>
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App;