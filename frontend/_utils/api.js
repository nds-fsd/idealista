
const API_URL = "http://localhost:3000/realestates"

export const getRealEstates = async () => {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getRealEstate = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const addRealEstate = async (realEstate) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(realEstate),
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateRealEstate = async (id, realEstate) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(realEstate),
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteRealEstate = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}