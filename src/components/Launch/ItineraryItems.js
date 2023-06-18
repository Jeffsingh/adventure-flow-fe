import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { recommendItinerary } from '../../services/tripService';
import { LinearProgress, Typography } from '@mui/material';
  
export default function ItineraryItems({month, place, activities, loading, setLoading, checked, setChecked}) { 
   
    const [items, setItems] = useState([]);   
   

    useEffect(() => {
        const data  = {
            month: month, 
            location: place, 
            activities: activities.join(',')
        };  
        setLoading(true); 
        recommendItinerary(data).then(res => {
            setItems(res);
        }).catch(err => {
            console.log(err);
        }).finally(() => setLoading(false)); 

    }, []);  

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked]; 
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        } 
        setChecked(newChecked);
    };

    if (loading) {
        return (<>
            <Typography variant="h6" component="h1" gutterBottom>
                Hold on! We are finding cool things to do in  <b>{place}</b>. 
                <br />
                <br />
                <LinearProgress />
            </Typography>   
        </>);  
    }

    return (
        <>
            <Typography variant="h6" component="h1" gutterBottom>
                We have found some cool things to do in <b>{place}</b>. 
                <br />
                <br />
                <b>Add</b> what you like to your <b>itinerary</b>.  
            </Typography>   
            <List sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}>
                {items.slice(0,6).map((value) => {
                    const labelId = `checkbox-list-label-${value}`; 
                    return (
                        <ListItem
                        key={value} 
                        disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={value} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </> 
    );

}