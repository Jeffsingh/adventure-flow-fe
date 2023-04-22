import fetchRequest from "./fetchClient";

const apiURL = process.env.REACT_APP_API_URL;
export const GOOGLE_OAUTH_URL = apiURL + "/api/sessions/google/redirect";

export const signUp = async (data) => {
    return await fetchRequest.post(apiURL + "/api/users/signup", {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
    }).then((response) => {
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error)
        return error.response.data
    });
};


export const logIn = async (data) => {
    return await fetchRequest.post(apiURL + "/api/users/login", {
        email: data.email,
        password: data.password
    }).then((response) => {
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error)
        return error.response.data
    });
};

export const getUserById = async (id) => {
    return await fetchRequest.get(apiURL + "/api/users/" + id)
        .then((response) => {
            console.log(response)
            return response.data
        }).catch((error) => {
            console.log(error)
            return error.response.data
        });
};