import React, { useEffect } from "react";
import logo from '../logo.svg';
import { useNavigate } from "react-router-dom";


const Oauth2 = () => {

    const navigate = useNavigate();


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        if (token) {
            localStorage.setItem("token", token);
        }
        navigate("/start");
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

export default Oauth2;