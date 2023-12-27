import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import RealEstateListElement from "./RealEstateListElement";
import realEstateApi from "../../../utils/apis/realEstateApi";

import styles from "./RealEstateList.module.css";


function RealEstateList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const operation = queryParams.get("operation");
    const localization = queryParams.get("location");
    const realEstateType = queryParams.get("realestatetype");

    const { data, isLoading } = useQuery("realEstateList", () => realEstateApi.ListRealState({ operation, location: localization, realestatetype: realEstateType }))
    if (isLoading) return <div> Loading... </div>
    if (!data) return <div> Something went wrong </div>

    const urlQueryString = () => {
        return "/realestates/map?operation=" + operation + "&location=" + localization + "&realestatetype=" + realEstateType;
    }

    return (
        <div className={styles.list}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    <h2>{operation + " > " + localization + " > " + realEstateType}</h2>
                </div>
                <div>
                    <ul>
                        <li className={styles.buttonblue}>Listado</li>
                        <li className={styles.buttongray}>
                            <Link className={styles.link} to={urlQueryString()} >Mapa</Link>
                        </li>
                    </ul>
                </div>
            </div>            
            {data.map(e => <RealEstateListElement key={e._id} realEstate={e}></RealEstateListElement>)}
        </div>
    )
}

export default RealEstateList;