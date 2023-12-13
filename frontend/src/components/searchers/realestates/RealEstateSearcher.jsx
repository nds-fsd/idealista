import styles from "./RealEstateSearcher.module.css";
import imageSearcher from "../../../assets/buscador-banner.svg"

function RealEstateSearcher() {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img src={imageSearcher} alt="Buscador inmuebles" />
                <div className={styles.searchcontainer}>
                    <div className={styles.searchheader}>
                        <div className={styles.tabselected}>Comprar</div>
                        <div className={styles.tabunselected}>Alquilar</div>
                        <div className={styles.tabunselected}>Compartir</div>
                    </div>
                    <div className={styles.searchbody}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealEstateSearcher;