import React, { useContext } from "react";
import realEstateApi from "../../utils/apis/realEstateApi";
import RealEstateListElement from "../realEstates/realEstateList/RealEstateListElement";
import { useQuery } from "react-query";
import UserContext from "../../context/UserContext";
import styles from "./Anuncios.module.css";

const Anuncios = () => {
  const { user } = useContext(UserContext);
  const { data, isLoading, refetch } = useQuery(["realestates", user], () => realEstateApi.GetByUserId({ userId: user._id }));

  if (isLoading) return <div> Is Loading...</div>;
  if (!data) return <div>Something went wrong</div>;

  return <div>Anuncios</div>;
};

export default Anuncios;
