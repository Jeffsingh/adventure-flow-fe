import React, { useState } from "react";
import Container from '@mui/material/Container'; 
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'; 
import { adventureTravelLocations } from './locations';  
import { useGetUserData } from "../../hooks/useGetUserData";
import LocationSearch from "./LocationSearch";
import { Copyright } from "../Copyright";
 
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const useGoogleSearch = true; 

const Greeting = ({ name }) => { 
    return (
        <Typography variant="subtitle2" component="h1" sx={{marginBottom: "50px"}}>
            {name && `Hey ${name}! ` }
            We want to make planning your adventure easy! 
        </Typography> 
    );
}; 
  
 

export const BasicTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success"  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Where</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>When</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>What</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}


const Launch = () => { 
    const [user, setUser] = useState(); 

    let userData = useGetUserData();  
 
    return (
        <Container maxWidth="md"> 
            <Box  sx={{  my: 4, minHeight: "80vh"}}>
                <Typography variant="h4" component="h1">
                    Adventure Flow 
                </Typography>  
                <Greeting name={userData?.first_name} />
                <Box  sx={{  display: "flex", flexDirection: "row"}}>  
                    <Box>
                        <Typography variant="h6" component="h1" gutterBottom>
                        Where are you headed?
                        </Typography>  
                        
                        {useGoogleSearch && <LocationSearch />} 
                        {!useGoogleSearch && <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={adventureTravelLocations}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Location" />}
                        />}
                    </Box>
                    <BasicTimeline />
                </Box>
                
               
            </Box>
            <Copyright sx={{marginTop: "auto"}} />
        </Container>
    );
}; 
 
export default Launch; 