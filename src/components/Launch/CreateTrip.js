import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

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
                Your Trip
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
        </Box>
        
        
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
    </div>
  );
}