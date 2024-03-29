import React, { useEffect, useState } from "react";
import moment from "moment"; 
import Container from '@mui/material/Container'; 
import Typography from '@mui/material/Typography'; 
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';  
import { useGetUserData } from "../../hooks/useGetUserData";
import LocationSearch from "./LocationSearch";
import { Copyright } from "../Copyright"; 
import { Button, ButtonGroup, IconButton } from "@mui/material";
import Duration from "./Duration";
import Activities from "./Activities";
import { BasicTimeline } from "./BasicTimeline";
import ClearIcon from '@mui/icons-material/Clear';
import ItineraryItems from "./ItineraryItems";
import { useNavigate } from "react-router-dom";

const useGoogleSearch = true; 

const Greeting = ({ name }) => { 
    return (
        <Typography variant="subtitle2" component="h1" sx={{marginBottom: "20px"}}>
            {name && `Hey ${name}! ` }
            We want to make planning your adventure easy! 
        </Typography> 
    );
}; 
  
 

const Launch = () => { 
    const [place, setPlace] = useState(); 

    const [step, setStep ] = useState(1); 

    const [time, setTime] = useState([]); 
    const [date, setDate] = useState(); 
    const [activitiesList, setActivitiesList] = useState([]); 

    const navigate = useNavigate();

    let { data } = useGetUserData();  
    if (!data) {
        navigate("/signup");
    }
     
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

    const onChangeDate = e => {

        const newDate = moment(new Date(e.target.value)).add(4, "hours").format('YYYY-MM-DD');
        setDate(newDate); 
        
    };

    let formattedMonth = moment(date).format("MMMM");
    let placeDescription = place?.description?.split(',')[0] || "";
    return (
        <Container maxWidth="md"> 
            <Box  sx={{  my: 2, minHeight: "80vh"}}>
                <Typography variant="h4" component="h1">
                    Adventure Flow 
                </Typography>  
                <Greeting name={data?.first_name} />
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
                            <IconButton aria-label="delete" size="small" color="primary" onClick={() => setStep( step - 1)}>
                                <ClearIcon fontSize="inherit" />
                            </IconButton>
                            <br />
                            <br />
                            <br />
                            <Typography variant="h6" component="h1" gutterBottom>
                                When are you going?
                            </Typography>  
                            <TextField type="date" sx={{marginBottom: "24px"}} onChange={onChangeDate} value={date} ></TextField>
                            <Duration setTime={setTime} time={time} />
                        </Box>
                    }
                    {step === 3 && 
                        <Box sx={{width: "60vw"}}> 
                            <span><b> {duration}</b> in <b>{place?.description}</b> sounds like an adventure!</span>  
                            <IconButton aria-label="delete" size="small" color="primary" onClick={() => setStep(step - 1)}>
                                <ClearIcon fontSize="inherit" />
                            </IconButton>
                            <br />
                            <br />
                            <br />
                            <Typography variant="h6" component="h1" gutterBottom>
                                What are you planning to do? 
                            </Typography>   
                            <Activities setActivitiesList={setActivitiesList} />
                        </Box>
                    }
                     {step === 4 ?  
                        <Box sx={{width: "60vw"}} gutterBottom>   
                            <ItineraryItems month={formattedMonth} place={placeDescription} activities={activitiesList} />
                        </Box>
                    : null }
                    <BasicTimeline step={step}   />
                </Box>  
                <Box> 
                    <ButtonGroup>
                        {step < 5 && <Button sx={{marginRight: "20px"}} variant="contained" onClick={() => setStep(step + 1)} >Next</Button>}
                        {step > 1 && <Button sx={{marginRight: "20px"}} variant="outlined" color="warning" onClick={() => setStep(step - 1)} >Back</Button>}
                    </ButtonGroup>   
                </Box>
               
            </Box>
            
            <Copyright sx={{marginTop: "auto"}} />
        </Container>
    );
}; 
 
export default Launch; 