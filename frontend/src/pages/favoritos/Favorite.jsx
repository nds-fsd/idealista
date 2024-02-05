import React, { useContext } from "react";
import favoriteApi from "../../utils/apis/favoriteApi";
import RealEstateListElement from "../realEstates/realEstateList/RealEstateListElement";
import { useQuery } from "react-query";
import UserContext from "../../context/UserContext";
import styles from "./Favorite.module.css"

const Favorite = () => {
    const { user } = useContext(UserContext)
    const { data, isLoading, refetch } = useQuery(['favorite', user], () => favoriteApi.getFavorites({ userId: user._id }), { enabled: Boolean(user?._id) });

    if (isLoading) return <div>Is Loading...</div>;

    if (!data) return <div> Something went wrong</div>;

    const deleteById = async (realEstate) => {
        await favoriteApi.removeById({ userId: user._id, realestateId: realEstate._id })
        refetch()
    }

    return (
        <div style={{ marginLeft: "175px" }}>
            {data.map(e => {
                const realEstate = e.realEstate;
                realEstate.fav = true;
                return <RealEstateListElement key={realEstate._id} realEstate={realEstate} onFavorite={deleteById} />
            })}
        </div>

    )

}


export default Favorite;