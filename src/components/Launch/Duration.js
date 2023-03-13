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
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Duration({setTime}) {
  const theme = useTheme();
  const [duration, setDuration] = React.useState([]);

  React.useEffect(() => {
    setTime(duration);
  },[duration])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDuration(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{  width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Duration</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name" 
          value={duration}
          onChange={handleChange}
          input={<OutlinedInput label="Duration" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, duration, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
