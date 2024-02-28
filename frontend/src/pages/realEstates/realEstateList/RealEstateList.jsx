import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

import realEstateApi from "../../../utils/apis/realEstateApi";
import favoriteApi from "../../../utils/apis/favoriteApi";
import RealEstateListElement from "./RealEstateListElement";
import RealEstateNumber from "../../../components/realestates/RealEstateNumber";
import RealEstateOperation from "../../../components/realestates/RealEstateOperations";
import RealEstatePrices from "../../../components/realestates/RealEstatePrices";
import RealEstateStates from "../../../components/realestates/RealEstateStates";
import RealEstateType from "../../../components/realestates/RealEstateType";

import styles from "./RealEstateList.module.css";
import imageList from "../../../assets/lista.svg";
import imageMap from "../../../assets/marcador.svg";
import UserContext from "../../../context/UserContext";



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
    const [realEstateStates, setRealEstateStates] = useState({ "Obra-nueva": false, "Buen-estado": false, "A-reformar": false });
    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(999999999)
    const [rooms, setRooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);

    const { user } = useContext(UserContext)
    const userIdFilter = (user) ? "userid: " + user._id : "";

    useEffect(() => {
        setRealEstateOperationValue(operation);
        setRealEstateTypeValue(realEstateType);
        setRealEstateLocationValue(localization);
        setPriceMin(0);
        setPriceMax(999999999);
        setRooms(1);
        setBathrooms(1);
    }, [])

    const getPriceQueryString = () => {
        return priceMin + "," + priceMax;
    }

    const getStatesQueryString = () => {
        let states = "";
        if (realEstateStates["Obra-nueva"]) states = states.concat("Obra-nueva,");
        if (realEstateStates["Buen-estado"]) states = states.concat("Buen-estado,");
        if (realEstateStates["A-reformar"]) states = states.concat("A-reformar,");
        states = states.substring(0, states.length - 1);
        return states;
    }

    const query = useQuery("realEstateList", () => realEstateApi.ListRealState({ operation, location: localization, realestatetype: realEstateType, price: getPriceQueryString(), states: getStatesQueryString(), rooms: rooms, bathrooms: bathrooms, userIdFilter }))
    if (query.isLoading || query.isFetching) return <div className={styles.errormessage}> Loading... </div>
    if (!query.data) return <div className={styles.errormessage}> Something went wrong </div>
    const mensajeerror = (query.data.length <= 0) ? "No se ha encontrado inmuebles" : "";

    query.data.map((e) => e.fav = e.isFavorite || false)

    const getListQueryString = () => {
        const states = getStatesQueryString();
        const prices = getPriceQueryString();
        return `?operation=${realEstateOperationValue}&location=${realEstateLocationValue}&realestatetype=${realEstateTypeValue}&price=${prices}&state=${states}&rooms=${rooms}&bathrooms=${bathrooms}`;
    }

    const getMapQueryString = () => {
        const states = getStatesQueryString();
        const prices = getPriceQueryString();
        return `/realestates/map?operation=${realEstateOperationValue}&location=${realEstateLocationValue}&realestatetype=${realEstateTypeValue}&price=${prices}&state=${states}`;
    }

    const handlerLocationOnChange = (event) => {
        setRealEstateLocationValue(event.target.value);
    }

    const handlerSearchOnClick = () => {
        queryClient.clear();
        queryClient.refetchQueries("realEstateList");
    }

    const setFavorite = async ({ _id }) => {
        favoriteApi.addFavorite({ userId: user._id, realestateId: _id })
    }

    return (
        <div className={styles.root}>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    <h3>{operation + " > " + realEstateType + " > " + localization + " (" + query.data.length + ")"}</h3>
                </div>
                <div>
                    <ul>
                        <li className={styles.buttonblue}>
                            <img style={{ width: "16px", height: "16px", paddingRight: "10px" }} src={imageList} alt="Listado inmuebles" />
                            <span>Listado</span>
                        </li>
                        <li className={styles.buttongray}>
                            <img style={{ width: "16px", height: "16px", paddingRight: "10px" }} src={imageMap} alt="Mapa inmuebles" />
                            <Link className={styles.link} to={getMapQueryString()} >Mapa</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.errormessage}>{mensajeerror}</div>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                <div style={{ width: "210px" }}>
                    <div>
                        <span style={{ fontWeight: "700" }}>Operación:</span>
                        <RealEstateOperation realEstateOperationValue={realEstateOperationValue} setRealEstateOperationValue={setRealEstateOperationValue}></RealEstateOperation>
                    </div>
                    <div>
                        <span style={{ fontWeight: "700" }}>Tipo inmueble:</span>
                        <RealEstateType realEstateTypeValue={realEstateTypeValue} setRealEstateTypeValue={setRealEstateTypeValue}></RealEstateType>
                    </div>
                    <div>
                        <span style={{ fontWeight: "700" }}>Población:</span>
                        <input className={styles.location} type="text" value={realEstateLocationValue} onChange={handlerLocationOnChange}></input>
                    </div>
                    <div>
                        <span style={{ fontWeight: "700" }}>Precio:</span>
                        <RealEstatePrices priceMin={priceMin} setPriceMin={setPriceMin} priceMax={priceMax} setPriceMax={setPriceMax}></RealEstatePrices>
                    </div>
                    <div>
                        <span style={{ fontWeight: "700" }}>Estado:</span>
                        <RealEstateStates realEstateStates={realEstateStates} setRealEstateStates={setRealEstateStates}></RealEstateStates>
                    </div>
                    <div>
                        <span style={{ fontWeight: "700" }}>Habitaciones:</span>
                        <RealEstateNumber fields={4} number={rooms} setNumber={setRooms}></RealEstateNumber>
                    </div>
                    <div>
                        <span style={{ fontWeight: "700" }}>Baños:</span>
                        <RealEstateNumber fields={4} number={bathrooms} setNumber={setBathrooms}></RealEstateNumber>
                    </div>
                    <div>
                        <Link to={getListQueryString()}><button className={styles.search} onClick={handlerSearchOnClick}>Buscar</button></Link>
                    </div>
                </div>
                <div className={styles.list}>
                    {query.data.map(e => <RealEstateListElement key={e._id} realEstate={e} onFavorite={() => setFavorite(e)}></RealEstateListElement>)}
                    
                </div>
            </div>
        </div>

    )
}

export default RealEstateList;