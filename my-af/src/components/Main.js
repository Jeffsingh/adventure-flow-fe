import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg';
import { parseJwt } from "../services/parseJWT";

const Main = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let userData = parseJwt (localStorage.getItem("token")); 
        if (!userData && Math.floor(new Date().getTime() / 1000)  > userData.exp ) {
            navigate("/signup");
        }
        navigate("/start");
    })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Making adventure easier
                </p>
            </header>
        </div>
    )
}

export default Main;