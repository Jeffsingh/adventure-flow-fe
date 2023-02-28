import fetchRequest from "./fetchClient";

const apiURL = process.env.REACT_APP_API_URL;

export const getTripsByUserId = async (id) => {
    return await fetchRequest.get(apiURL + "/api/trips/user/" + id)
        .then((response) => {
            console.log(response)
            return response.data
        }).catch((error) => {
            console.log(error)
            return error.response.data
        });
};


export const createTrip = async (data, id) => {
    return await fetchRequest.post(apiURL + "/api/trips", {
        name: data.name,
        start_date: data.start_date,
        duration: data.duration,
        created_by: id
    }).then((response) => {
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error)
        return error.response.data
    });
};