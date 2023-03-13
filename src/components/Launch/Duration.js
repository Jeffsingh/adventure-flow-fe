import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

const names = [
  '1 day',
  '2 days',
  '3 days',
  '4 days',
  '5 days',
  '6 days',
  '7 days',
  '8 days',
  '9 days',
  '10 days',
  '11 days',
  '12 days',
  '13 days',
  '14 days',
  '3 weeks',
  '4 weeks or more', 
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Duration({setTime, time}) {
  const theme = useTheme(); 
 
  const handleChange = (event) => { 
    
    const value =  event?.target?.value; 
    const d = typeof value === 'string' ? value.split(',') : []; 
    setTime(d);
  };

  return (
    <div>
      <FormControl sx={{  width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Duration</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name" 
          value={time}
          onChange={handleChange}
          input={<OutlinedInput label="Duration" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, time, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
