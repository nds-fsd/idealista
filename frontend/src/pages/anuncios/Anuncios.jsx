import React, { useContext, useEffect } from "react";
import realEstateApi from "../../utils/apis/realEstateApi";
import RealEstateListElement from "../realEstates/realEstateList/RealEstateListElement";
import { useQuery } from "react-query";
import UserContext from "../../context/UserContext";
import styles from "./Anuncios.module.css";

const Anuncios = () => {
  const { user } = useContext(UserContext);
  const { data, isLoading, isError, refetch } = useQuery(["realestates", user ? user._id : null], () => {
    if (user) {
      return realEstateApi.GetByUserId(user._id);
    } else {
      return Promise.resolve(null);
    }
  });

  useEffect(() => {
    refetch();
  }, [user, refetch]);

  if (isLoading) return <div> Is Loading...</div>;
  if (isError) return <div>Something went wrong</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className={styles.anunciosContainer}>
      {data.map((realEstate) => (
        <RealEstateListElement key={realEstate._id} realEstate={realEstate} />
      ))}
    </div>
  );
};

export default Anuncios;
