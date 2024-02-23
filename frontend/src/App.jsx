import React from "react";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import AppLayout from "./components/app/appLayout/AppLayout";
import Login from "./pages/login/Login";
import RealEstateSearcher from "./pages/realEstates/realEstateSearcher/RealEstateSearcher";
import RealEstateDetails from "./pages/realEstates/realEstateDetails/RealEstateDetails";
import RealEstateForm from "./pages/realEstates/realEstateForm/realEstateForm";
import RealEstateList from "./pages/realEstates/realEstateList/RealEstateList";
import RealEstateListMap from "./pages/realEstates/realEstateListMap/RealEstateListMap";
import Register from "./pages/register/Register";
import Private from "./components/private/Private";
import UserProfile from "./pages/profile/UserProfile/UserProfile";
import UserContext from "./context/UserContext";
import Anuncios from "./pages/anuncios/Anuncios";
import Favorite from "./pages/favoritos/Favorite";
import Chat from "./pages/chat/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<RealEstateSearcher />} />
        <Route path="/realestates" element={<RealEstateList />} />
        <Route path="/realestates/:id" element={<RealEstateDetails />} />
        <Route
          path="/realestates/create"
          element={
            <Private>
              <RealEstateForm />
            </Private>
          }
        />
        <Route path="/realestates/map" element={<RealEstateListMap />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/favorite"
          element={
            <Private>
              <Favorite />
            </Private>
          }
        ></Route>
        <Route
          path="/anuncios"
          element={
            <Private>
              <Anuncios />
            </Private>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Private>
              <UserProfile />
            </Private>
          }
        ></Route>
        <Route
          path="/chat"
          element={
            <Private>
              <Chat />
            </Private>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
