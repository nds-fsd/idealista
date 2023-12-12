import styles from "./RealEstateSearcher.module.css";
import imageSearcher from "../../../assets/buscador-banner.svg"

function RealEstateSearcher() {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img src={imageSearcher} alt="Buscador inmuebles" />

            </div>
        </div>
    )
}

export default RealEstateSearcher;