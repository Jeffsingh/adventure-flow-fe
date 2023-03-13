import React from "react"; 
import { useGetUserData } from "../hooks/useGetUserData";
import logo from '../logo.svg'; 
 
const Main = () => {
  
    useGetUserData(); 

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" /> 
            </header>
        </div>
    )
}

export default Main;