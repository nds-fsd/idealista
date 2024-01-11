import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

import realEstateApi from "../../../utils/apis/realEstateApi";
import RealEstateListElement from "./RealEstateListElement";
import RealEstateOperation from "../../../components/realestates/RealEstateOperations";
import RealEstateType from "../../../components/realestates/RealEstateType";


import styles from "./RealEstateList.module.css";
import imageList from "../../../assets/lista.svg";
import imageMap from "../../../assets/marcador.svg";


function RealEstateList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const operation = queryParams.get("operation");
    const localization = queryParams.get("location");
    let realEstateType = queryParams.get("realestatetype");
    const queryClient = useQueryClient();
    const [realEstateOperationValue, setRealEstateOperationValue] = useState("");
    const [realEstateTypeValue, setRealEstateTypeValue] = useState("");
    const [realEstateLocationValue, setRealEstateLocationValue] = useState("");

    useEffect(() => {
        setRealEstateOperationValue(operation);
        setRealEstateTypeValue(realEstateType);
        setRealEstateLocationValue(localization);
    }, [])

    const query = useQuery("realEstateList", () => realEstateApi.ListRealState({ operation, location: localization, realestatetype: realEstateType }))
    if (query.isLoading || query.isFetching) return <div> Loading... </div>
    if (!query.data) return <div> Something went wrong </div>

    const getQueryString = () => {
        return `?operation=${realEstateOperationValue}&location=${realEstateLocationValue}&realestatetype=${realEstateTypeValue}`;
    }

    const handlerLocationOnChange = (event) => {
        setRealEstateLocationValue(event.target.value);
    }

    const handlerSearchOnClick = () => {
        // al hacer click en el boton buscar queryClient.invalidateQueries no se actualiza la lista, se recarga la misma lista
        //queryClient.invalidateQueries("realEstateList");

        // al pulsar 1a vez el boton buscar no se actualiza la lista, al pulsar el 2a vez el boton se actualiza la lista con el nuevo filtro
        // query.clear;
        // query.refetch("realEstateList");

        // al pulsar 1a vez el boton buscar no se actualiza la lista, al pulsar el 2a vez el boton se actualiza la lista con el nuevo filtro
        // query.refetch("realEstateList");
        
        // Funcionalmente es correcto, pero si no cambia el filtro y pulso buscar hace una llamada innecesaria al backend
        queryClient.clear();
        queryClient.refetchQueries("realEstateList");
    }

    return (
        <div className={styles.root}>
            <h2>{operation + " > " + localization + " > " + realEstateType}</h2>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{width: "210px"}}>                
                    <div>
                        <span>Operación:</span>
                        <RealEstateOperation realEstateOperationValue={realEstateOperationValue} setRealEstateOperationValue={setRealEstateOperationValue}></RealEstateOperation>
                    </div>
                    <div>Tipo inmueble:</div>
                    <RealEstateType realEstateTypeValue={realEstateTypeValue} setRealEstateTypeValue={setRealEstateTypeValue}></RealEstateType>
                    <div>
                        <span>Población:</span>
                        <input className={styles.location} type="text" value={realEstateLocationValue} onChange={handlerLocationOnChange}></input>
                    </div>
                    <div>
                        <Link to={getQueryString()}><button className={styles.search} onClick={handlerSearchOnClick}>Buscar</button></Link>
                    </div>
                </div>
                <div className={styles.list}>
                    {query.data.map(e => <RealEstateListElement key={e._id} realEstate={e}></RealEstateListElement>)}
                </div>                
            </div>
        </div>
        
    )
}

export default RealEstateList;