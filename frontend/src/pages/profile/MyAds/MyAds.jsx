import styles from "./myAds.module.css";

const MyAds = ({ads}) => {
    return (
        <div className={styles.myAds}>
            {/* <h1>Mis publicaciones</h1> */}
            {/* <ul>
                {ads.map(ad => (
                    <li key={ad._id}>
                        <h2>{ad.title}</h2>
                        <p>{ad.description}</p>
                        <p>{ad.price}</p>
                        <p>{ad.location}</p>
                    </li>
                ))}
            </ul> */}
            Funcionalidad en construcción
        </div>
    );
}


export default MyAds;