import * as React from 'react';
import { useTheme } from '@mui/material/styles'; 
import { Checkbox, Select, FormControl, InputLabel, OutlinedInput, MenuItem, ListItemText } from '@mui/material'; 

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names =  [
    "Backpacking",
    "Bouldering",
    "Camping",
    "Canoeing",
    "Cross-country skiing",
    "Dog sledding",
    "Fishing",
    "Hiking",
    "Hunting",
    "Ice fishing",
    "Ice skating",
    "Kayaking",
    "Kiteboarding",
    "Mountaineering",
    "Mountain biking",
    "Road cycling",
    "Rock climbing",
    "Scuba diving",
    "Skiing",
    "Snorkeling",
    "Snowboarding",
    "Snowmobiling",
    "Snowshoeing",
    "Stand-up paddleboarding",
    "Surfing",
    "Swimming",
    "Trail running",
    "Whitewater rafting",
    "Windsurfing",
    "Zip-lining"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Activities({setActivitiesList}) {
  const theme = useTheme();
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    setActivitiesList(list); 
  },[list])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setList(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{  width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Activities</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name" 
          value={list}
          onChange={handleChange}
          multiple
          
          input={<OutlinedInput label="Activities" />}
          MenuProps={MenuProps}
        >
          
           {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={list.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
