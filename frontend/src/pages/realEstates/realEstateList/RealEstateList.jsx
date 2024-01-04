import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

import realEstateApi from "../../../utils/apis/realEstateApi";
import RealEstateListElement from "./RealEstateListElement";
import RealEstateType from "../../../components/realestates/RealEstateType";


import styles from "./RealEstateList.module.css";


function RealEstateList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const operation = queryParams.get("operation");
    const localization = queryParams.get("location");
    let realEstateType = queryParams.get("realestatetype");
    const queryClient = useQueryClient();
    const [realEstateTypeValue, setRealEstateTypeValue] = useState("");

    useEffect(() => {
        setRealEstateTypeValue(realEstateType);
    }, [])

    const { data, isLoading } = useQuery("realEstateList", () => realEstateApi.ListRealState({ operation, location: localization, realestatetype: realEstateType }))
    if (isLoading) return <div> Loading... </div>
    if (!data) return <div> Something went wrong </div>

    const getQueryString = () => {
        return `?operation=${operation}&location=${localization}&realestatetype=${realEstateTypeValue}`;
    }

    const handlerSearchOnClick = () => {
        queryClient.invalidateQueries("realEstateList");
    }

    return (
        <div className={styles.root}>
            <h2>{operation + " > " + localization + " > " + realEstateType}</h2>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{width: "210px"}}>                
                    <div>Tipo vivienda:</div>
                    <RealEstateType realEstateTypeValue={realEstateTypeValue} setRealEstateTypeValue={setRealEstateTypeValue}></RealEstateType>
                    <div>
                        <Link to={getQueryString()}><button className={styles.search} onClick={handlerSearchOnClick}>Buscar</button></Link>
                    </div>
                </div>
                <div className={styles.list}>
                    {data && data.map(e => <RealEstateListElement key={e._id} realEstate={e}></RealEstateListElement>)}
                </div>                
            </div>
        </div>
        
    )
}

export default RealEstateList;