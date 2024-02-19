import styles from "./MyFavorites.module.css";

const MyFavorites = ({favorites}) => {
    return (
        <div className={styles.myFavorites}>
            {/* <h1>Mis favoritos</h1> */}
            {/* <ul>
                {favorites.map(favorite => (
                    <li key={favorite._id}>
                        <h2>{favorite.title}</h2>
                        <p>{favorite.description}</p>
                        <p>{favorite.price}</p>
                        <p>{favorite.location}</p>
                    </li>
                ))}
            </ul> */}
            Funcionalidad en construcción
        </div>
    );
}

export default MyFavorites;