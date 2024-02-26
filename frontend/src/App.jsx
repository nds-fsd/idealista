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
import About from "./pages/about/About";
import Cookies from "./pages/cookies/Cookies";
import Privacidad from "./pages/privacidad/Privacidad";
import Terminos from "./pages/terminos/Terminos";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<RealEstateSearcher />} />
                <Route path="/realestates" element={<RealEstateList />} />
                <Route path="/realestates/:id" element={<RealEstateDetails />} />
                <Route path="/realestates/create" element={<RealEstateForm />} />
                <Route path="/realestates/create/:id" element={<RealEstateForm  />} />
                <Route path="/realestates/map" element={<RealEstateListMap />}></Route>
                <Route
                    path="/register"
                    element={
                        <Private>
                            <Register />
                        </Private>
                    }
                ></Route>
                <Route
                    path="/login"
                    element={
                        <Private>
                            <Login />
                        </Private>
                    }
                ></Route>
                <Route path="/favorite" element={<Favorite />}></Route>
                <Route path="/anuncios" element={<Anuncios />}></Route>
                <Route path="/profile" element={<UserProfile />}></Route>
                <Route path="/chat" element={<Chat />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/cookie" element={<Cookies />}></Route>
                <Route path="/privacity" element={<Privacidad />}></Route>
                <Route path="/terms" element={<Terminos />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
