import React, { useEffect } from "react";  
import { useNavigate } from "react-router-dom";  

const Main = () => { 

    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search); 
        if (params.get("code")) {
            window.location.href = "/api/sessions/oauth/google" + window.location.search;   
        }  else if (params.get("token")) {
            localStorage.setItem("token", params.get('token')); 
            navigate("/start");
        }  else {
            navigate("/signup");
        } 
    }, []); 
    return (
        <></>
    )
}

export default Main;