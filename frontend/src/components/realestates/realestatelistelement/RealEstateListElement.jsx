import styles from "./realestatelistelement.module.css"

const RealEstateListElement = (realEstate) => {
  const { realEstate: data } = realEstate
  const {shortDescription, realEstateType, location, metersBuilt, price} = data
  return (
    <div className={styles.container}>
      <h2>{shortDescription}</h2>
      <p>Real Estate Type: {realEstateType}</p>
      <p>Location: {location}</p>
      <p>Square Meters: {metersBuilt}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default RealEstateListElement;

