import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { parseJwt } from "../services/parseJWT";

export const useGetUserData = () => {
    const [data, setUserData] = useState();  
    const navigate = useNavigate();
    useEffect(() => {
        let userData = parseJwt(localStorage.getItem("token")); 
        if (!userData || Math.floor(new Date().getTime() / 1000)  > userData.exp ) {
            navigate("/signup");
        } else {
            setUserData(userData); 
            navigate("/start");
        } 
    }, []);
    return data; 
}; 
