import { Link } from "react-router-dom";
import styles from "./realestatelistelement.module.css"

const RealEstateListElement = (realEstate) => {
  const { realEstate: data } = realEstate
  const {_id, shortDescription, realEstateType, location, metersBuilt, price} = data

  return (
    <Link className={styles.container} to={"/realestates/"+_id}>
      <h2>{shortDescription}</h2>
      <p>Real Estate Type: {realEstateType}</p>
      <p>Location: {location}</p>
      <p>Square Meters: {metersBuilt}</p>
      <p>Price: {price}</p>
    </Link>
  );
};

export default RealEstateListElement;

