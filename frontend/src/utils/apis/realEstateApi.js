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

export const CreateRealEstate = (data) => {
    try {
        return api.post(`/realestates`, data)
            .then((res) => res.data)
            .catch((e) => console.log(e));
    } catch(e) {
        console.log("Error in realEstateApi.js CreateRealEstate:", error.message);
    }
}

const GetRealEstateBuyOperations = () => {
    try {
        return api.get(`masterdata/realestate/buyoperations`)
            .then(response => response.data)
            .catch((error) => console.log(error.message));
    } catch(error) {
        console.log("Error in realEstateApi.js GetRealEstateBuyOperations:", error.message);
    }
}
const GetRealEstateTypes = () => {
    try {
        return api.get(`masterdata/realestate/types`)
            .then(response => response.data)
            .catch((error) => console.log(error.message));
    } catch(error) {
        console.log("Error in realEstateApi.js GetRealEstateTypes:", error.message);
    }
}

export default { 
    CreateRealEstate, 
    GetRealEstate, 
    GetRealEstateBuyOperations, 
    GetRealEstateTypes, 
    ListRealState    
};