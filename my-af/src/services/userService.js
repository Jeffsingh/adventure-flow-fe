import fetchRequest from "./fetchClient";

export const signUp = async (data) => {
    return await fetchRequest.post("http://localhost:8000" + "/api/users/signup", {
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
    return await fetchRequest.post("http://localhost:8000" + "/api/users/login", {
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