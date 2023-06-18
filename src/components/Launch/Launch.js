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
import CreateTrip from "./CreateTrip";

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
    const [checked, setChecked] = useState([0]); 
    const [activitiesList, setActivitiesList] = useState([]); 
    const [loading, setLoading] = useState(false); 
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
                {step === 1 ? <Greeting name={data?.first_name} /> : null } 
                <Box  sx={{  display: "flex", flexDirection: "row", marginTop: '20px'}}>  
                    <Box sx={{width: "60vw"}}>
                        {step === 1 && 
                            <>   
                                <Typography variant="h6" component="h1" gutterBottom>
                                Where are you headed?
                                </Typography>   
                                <LocationSearch  setPlace={setPlace} />  
                            </>
                        }
                        {step === 2 && 
                            <>  
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
                            </>
                        }
                        {step === 3 && 
                            <> 
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
                            </>
                        }
                        {step === 4 ?   
                            <ItineraryItems month={formattedMonth} place={placeDescription} activities={activitiesList} loading={loading} setLoading={setLoading} checked={checked} setChecked={setChecked} /> 
                        : null }
                        {step === 5 ?   
                            <CreateTrip date={date} duration={time} location={place} itineraryItems={checked} />
                        : null }  
                    </Box>
                    {step < 4 ?  <BasicTimeline step={step}   /> : null }
                </Box>  
                {loading === false ? 
                    <Box> 
                        <ButtonGroup>
                            {step < 5 && <Button sx={{marginRight: "20px"}} variant="contained" onClick={() => setStep(step + 1)} >Next</Button>}
                            {step > 1 && <Button sx={{marginRight: "20px"}} variant="outlined" color="warning" onClick={() => setStep(step - 1)} >Back</Button>}
                        </ButtonGroup>   
                    </Box> : null
                }   
            </Box> 
            <Copyright sx={{marginTop: "auto"}} />
        </Container>
    );
}; 
 
export default Launch; 