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

export default { GetRealEstate, ListRealState }