import React, {useEffect} from "react"; 
import logo from '../logo.svg'; 
 
const Auth = () => {
  
    useEffect(() => {
        
        const params = new URLSearchParams( window.location.search);
        const jwt = parseInt(params.get("jwt")); 

    }, []); 

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" /> 
            </header>
            {jwt}
        </div>
    )
}

export default Main;