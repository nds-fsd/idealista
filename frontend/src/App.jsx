import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppNav from "./components/app/appnav/AppNav";
import AppLayout from "./components/app/appLayout/AppLayout";
import RealEstateSearcher from "./pages/realEstates/realEstateSearcher/RealEstateSearcher";
import RealEstateDetails from "./pages/realEstates/realEstateDetails/RealEstateDetails";
import RealEstateList from "./pages/realEstates/realEstateList/RealEstateList";

import style from "./App.module.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<RealEstateSearcher />}></Route>
          <Route path="/realestates" element={<RealEstateList />}></Route>
          <Route path="/realestates/:id" element={<RealEstateDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;