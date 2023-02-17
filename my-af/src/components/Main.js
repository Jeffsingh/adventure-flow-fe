import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg';

const Main = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/signup");
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