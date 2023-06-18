import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, ButtonGroup, IconButton, Typography } from '@mui/material'; 
import CarRentalIcon from '@mui/icons-material/CarRental';
import FlightIcon from '@mui/icons-material/Flight'; 
import ShareIcon from '@mui/icons-material/Share';  

const columns = [ 
  { field: 'description', headerName: 'Description', width: "100%" }, 
];

// const rows = [
//   { id: 1, description: 'Visiting the Grand Prismatic Spring' },
//   { id: 2, description: 'Visiting Yellowstone Canyon' },
// ];

export default function CreateTrip({date, duration, location, itineraryItems}) {
  
    const rows = itineraryItems.filter((i) => i?.length > 5).map((item, i) => ({ id: i, description: item })); 

    return (
    <div style={{ width: '100%', marginBottom: "20px"}}>
        <Box style={{marginBottom: "20px"}}> 
            <Typography variant="h6" component="h1" gutterBottom>
                Your Trip details
            </Typography>  
            <div>
                Trip Date: {date}
            </div>
            <div>
                Duration: {duration}
            </div>
            <div>
                Location: {location?.description}
            </div>

            <div style={{ width: '100%', margin: "10px 0 10px", display: "flex", flexDirection: "row", justifyContent:"flex-start"}}>
                <div>
                    Add Flight: 
                    <IconButton color="primary" aria-label="share">
                        <FlightIcon />
                    </IconButton>
                </div>
                <div>
                    Add Car: 
                    <IconButton color="primary" aria-label="share">
                        <CarRentalIcon />
                    </IconButton>
                </div>
            </div>
            
           
        </Box>
        <Box>
            
            <div style={{ width: '100%', margin: "10px 0 10px", display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                <Button variant="outlined">Add Itinerary Item</Button>
                <IconButton color="primary" aria-label="share">
                    <ShareIcon />
                </IconButton>
            </div>
            
            {rows?.length > 1 ? 
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
                : null
            }
        </Box>  
    </div>
  );
}