import axios from "axios";

const getToken = () => localStorage.getItem("accessToken") || false;

const fetchRequest = axios.create({
    headers: {
        "content-type": "application/json"
    }
})

fetchRequest.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) config.headers['Authorization'] = 'Bearer ' + token;
        return config;
    },
    error => Promise.reject(error)
)

export default fetchRequest;