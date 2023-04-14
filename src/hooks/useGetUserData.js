import { useEffect, useState } from "react"; 
import { parseJwt } from "../services/parseJWT";

export const useGetUserData = () => {
    const [data, setUserData] = useState(); 
    useEffect(() => {
        let userData = parseJwt(localStorage.getItem("token"));  
        if (!userData || Math.floor(new Date().getTime() / 1000)  > userData.exp ) {
            setUserData(null);  
        } else {
            setUserData(userData);   
        } 
    }, []);
    return { data, setUserData };  
}; 
