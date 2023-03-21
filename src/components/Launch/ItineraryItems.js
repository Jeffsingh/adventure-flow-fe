import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { recommendItinerary } from '../../services/tripService';
import { LinearProgress } from '@mui/material';
 

const iteneraryItems = [
    "1. Hike the Bell Rock Trail and take in the stunning views of the red rock formations.",
    "2. Visit the Chapel of the Holy Cross, a unique and stunning architectural wonder built into the red rocks.",
    "3. Explore the Tlaquepaque Arts and Crafts Village, a charming shopping district filled with galleries, boutiques, and restaurants.",
    "4. Take a Jeep tour of the red rock canyons and learn about Sedona's history and geology.",
    "5. Visit the Amitabha Stupa and Peace Park, a serene and peaceful Buddhist sanctuary.",
    "6. Enjoy a sunrise hot air balloon ride over the red rock formations for a breathtaking view of the landscape.",
    "7. Take a dip in the natural swimming holes and waterfalls at Slide Rock State Park.",
    "8. Go horseback riding through the picturesque red rock canyons.",
    "9. Visit the Sedona Heritage Museum to learn about the town's history and culture.",
    "10. Relax and rejuvenate at one of Sedona's many luxurious spas, known for their healing energy and stunning views."
];
 

export default function ItineraryItems({month, place}) {
  const [checked, setChecked] = useState([0]);

  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const data  = {
        month: month, 
        location: place
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
    return <LinearProgress />;
  }

  return (
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
  );
}