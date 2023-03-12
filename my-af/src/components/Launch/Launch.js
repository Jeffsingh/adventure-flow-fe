import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container'; 
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { adventureTravelLocations } from './locations';
import { parseJwt } from "../../services/parseJWT";
 
const Greeting = ({ name }) => { 
    return (
        <Typography variant="subtitle2" component="h1" gutterBottom>
            {name && `Hey ${name}! ` }
            We want to make planning your adventure easy! 
        </Typography> 
    );
}; 

const Launch = () => { 
    const [user, setUser] = useState(); 

    useEffect(() => {
        let userData = parseJwt(localStorage.getItem("token")); 
        setUser(userData); 
    }, []);

    return (
        <Container maxWidth="md"> 
            <Box sx={{ my: 4, minHeight: "80vh"}}>
                <Typography variant="h4" component="h1">
                    Adventure Flow 
                </Typography>  
                <Greeting name={user?.first_name} />
                
                <Typography variant="h6" component="h1" gutterBottom>
                   Where are you headed?
                </Typography>  
               
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={adventureTravelLocations}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Location" />}
                />
            </Box>
            <Copyright sx={{marginTop: "auto"}} />
        </Container>
    );
}; 


const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Adventure Flow
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default Launch; 