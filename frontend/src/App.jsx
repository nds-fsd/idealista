import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";

import AppLayout from "./components/app/appLayout/AppLayout";
import RealEstateSearcher from "./pages/realEstates/realEstateSearcher/RealEstateSearcher";
import RealEstateDetails from "./pages/realEstates/realEstateDetails/RealEstateDetails";
import RealEstateForm from "./pages/realEstates/realEstateForm/realEstateForm";
import RealEstateList from "./pages/realEstates/realEstateList/RealEstateList";
import RealEstateListMap from "./pages/realEstates/realEstateListMap/RealEstateListMap";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import UserProfile from "./pages/profile/UserProfile";
import UserContext from "./context/UserContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Favorite from "./pages/favoritos/favorite";



function App() {

  const { user } = useContext(UserContext)

  return (
    <Routes>

      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<RealEstateSearcher />} />
        <Route path="/realestates" element={<RealEstateList />} />
        <Route path="/realestates/:id" element={<RealEstateDetails />} />
        <Route path="/realestates/create" element={<RealEstateForm />} />
        <Route path="/realestates/map" element={<RealEstateListMap />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/profile" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

export default App;