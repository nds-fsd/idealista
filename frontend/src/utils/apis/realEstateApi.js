import api from "./apiWrapper";

const GetRealEstate = (id) => {
    return api.get(`realestates/${id}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
}

const ListRealState = (query) => {
    let q = "?"
    if (query.operation)
        q += `operation=${query.operation}`
    if (query.location)
        q += `&location=${query.location}`
    if (query.realestatetype)
        q += `&realEstateType=${query.realestatetype}`
    return api.get(`realestates${q}`)
        .then(res => res.data)
        .catch(e => console.log(e));
}

const GetRealEstateBuyOperations = () => {
    try {
        return api.get(`masterdata/realestate/buyoperations`)
            .then(response => response.data)
            .catch((error) => console.log(error.message));
    } catch(error) {
        console.log("Error in realEstateApi.js:", error.message);
    }
}

const GetRealEstateStatus = () => {
    try {
        return api.get(`masterdata/realestate/states`)
            .then(response => response.data)
            .catch((error) => console.log(error.message));
    } catch(error) {
        console.log("Error in realEstateApi.js:", error.message);
    }
}

const GetRealEstateTypes = () => {
    try {
        return api.get(`masterdata/realestate/types`)
            .then(response => response.data)
            .catch((error) => console.log(error.message));
    } catch(error) {
        console.log("Error in realEstateApi.js:", error.message);
    }
}



export default { GetRealEstate, ListRealState, GetRealEstateBuyOperations, GetRealEstateStatus, GetRealEstateTypes }