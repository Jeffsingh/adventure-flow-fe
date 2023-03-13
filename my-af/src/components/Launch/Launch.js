import React, { useEffect, useState } from "react";
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
import { Button } from "@mui/material";
import Duration from "./Duration";
import Activities from "./Activities";

const useGoogleSearch = true; 

const Greeting = ({ name }) => { 
    return (
        <Typography variant="subtitle2" component="h1" sx={{marginBottom: "50px"}}>
            {name && `Hey ${name}! ` }
            We want to make planning your adventure easy! 
        </Typography> 
    );
}; 
  
 

export const BasicTimeline = (props) => {
    const { step } = props;

    const getColor = (stepNumber, currentStep) => {
        if (stepNumber < currentStep) {
            return "success"; 
        } 
        if (stepNumber === currentStep) {
            return "warning";
        }
        return "grey"; 
    }; 

    return (
        <Timeline>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot color={getColor(1, step)} />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Where</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot color={getColor(2, step)} />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>When</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot color={getColor(3, step)}/>
            </TimelineSeparator>
            <TimelineContent>What</TimelineContent>
        </TimelineItem>
        </Timeline>
    );
}


const Launch = () => { 
    const [place, setPlace] = useState(); 

    const [step, setStep ] = useState(1); 

    const [time, setTime] = useState([]); 
    const [activitiesList, setActivitiesList] = useState([]); 

    let userData = useGetUserData();  

    useEffect(() => {
        if (time && time.length > 0) {
            setStep(3); 
        } else if (place) {
            setStep(2); 
        } else {
            setStep(1); 
        }
    }, [place, time]); 
    
    const duration = time && time[0] ? time[0].charAt(0).toUpperCase() + time[0].slice(1) : ""; 

    return (
        <Container maxWidth="md"> 
            <Box  sx={{  my: 4, minHeight: "80vh"}}>
                <Typography variant="h4" component="h1">
                    Adventure Flow 
                </Typography>  
                <Greeting name={userData?.first_name} />
                <Box  sx={{  display: "flex", flexDirection: "row"}}>  
                    {step === 1 && 
                        <Box sx={{width: "60vw"}}>
                            <Typography variant="h6" component="h1" gutterBottom>
                            Where are you headed?
                            </Typography>  
                            
                           <LocationSearch  setPlace={setPlace} /> 
                          
                        </Box>
                    }
                    {step === 2 && 
                        <Box sx={{width: "60vw"}}>
                            <span><b>{place?.description}</b> sounds like fun!</span> 
                            <br />
                            <br />
                            <br />
                            <Typography variant="h6" component="h1" gutterBottom>
                                When are you going?
                            </Typography>  
                            <TextField type="date" sx={{marginBottom: "24px"}}></TextField>
                            <Duration setTime={setTime} />
                        </Box>
                    }
                    {step === 3 && 
                        <Box sx={{width: "60vw"}}> 
                            <span><b> {duration} in  {place?.description}</b> sounds like an adventure!</span> 
                            <br />
                            <br />
                            <br />
                            <Typography variant="h6" component="h1" gutterBottom>
                                What are you planning to do? 
                            </Typography>   
                            <Activities setActivitiesList={setActivitiesList} />
                        </Box>
                    }
                    <BasicTimeline step={step}   />
                </Box>  
                <Box sx={{}}> 
                    <Button variant="contained" >Next</Button>
                </Box>
            </Box>
            
            <Copyright sx={{marginTop: "auto"}} />
        </Container>
    );
}; 
 
export default Launch; 