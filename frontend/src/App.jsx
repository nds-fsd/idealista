import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppNav from "./components/app/appnav/AppNav";
import AppLayout from "./components/app/appLayout/AppLayout";
import Searcher from "./components/searchers/realestates/RealEstateSearcher";
import RealEstateList from "./components/realestates/realestateslist/RealEstatesList";

import style from "./App.module.css";
import RealEstateDetails from "./components/realEstates/realEstateDetails/RealEstateDetails";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Searcher />}></Route>
          <Route path="/realestates" element={<RealEstateList />}></Route>
          <Route path="/realestates/:id" element={<RealEstateDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;