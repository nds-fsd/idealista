import styles from "./realestatecard.module.css"

const RealEstateCard = ({ shortDescription, squareMeters, price, location, realEstateType }) => {
  return (
    <div className={styles.container}>
      <h2>{shortDescription}</h2>
      <p>Real Estate Type: {realEstateType}</p>
      <p>Location: {location}</p>
      <p>Square Meters: {squareMeters}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default RealEstateCard;