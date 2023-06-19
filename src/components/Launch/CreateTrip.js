import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, ButtonGroup, IconButton, Typography } from '@mui/material'; 
import CarRentalIcon from '@mui/icons-material/CarRental';
import FlightIcon from '@mui/icons-material/Flight'; 
import ShareIcon from '@mui/icons-material/Share';  
import { Divider } from '@mui/material';
const columns = [ 
  { field: 'description', headerName: 'Description', width: "100%" }, 
];

const packingColumns = [ 
    { field: 'description', headerName: 'Packing List Item', width: "100%" }, 
];

const packignRows = [];

// const rows = [
//   { id: 1, description: 'Visiting the Grand Prismatic Spring' },
//   { id: 2, description: 'Visiting Yellowstone Canyon' },
// ];

export default function CreateTrip({date, duration, location, itineraryItems}) {
  
    const rows = itineraryItems.filter((i) => i?.length > 5).map((item, i) => ({ id: i, description: item })); 

    return (
    <div style={{ width: '100%'}}>
        <Box style={{marginBottom: "20px"}}> 
            <Typography variant="h6" component="h1" gutterBottom>
                Your Trip details
            </Typography>  
            <div style={{marginBottom:"10px"}}>
                Trip Date: {date}
            </div>
            <div>
                Duration: {duration}
            </div>
            
            <div style={{ width: '100%', margin: "0 0 10px", display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                <div className="description-item" style={{height: "22px", marginRight: "100px"}}>
                    Location: {location?.description}
                </div>
                <div style={{ display: "flex", flexDirection: "row"}}>   
                    <div className="description-item">
                        Add Flight: 
                        <IconButton color="primary" aria-label="share">
                            <FlightIcon />
                        </IconButton>
                    </div>
                    <div className="description-item" style={{ justifyContent:"flex-end"}}>
                        Add Car: 
                        <IconButton color="primary" aria-label="share">
                            <CarRentalIcon />
                        </IconButton>
                    </div>
                </div> 
            </div> 
        </Box>
        <Box style={{marginBottom: "10px"}}>
            
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
                    pageSizeOptions={[10, 20]}
                    checkboxSelection
                    
                />
                : null
            }
        </Box>  
        <div style={{margin: "40px 0 40px"}} />
        <Box style={{marginBottom: "40px"}}> 
            {packignRows?.length > 0 ? 
                <Typography variant="h6" component="h1" gutterBottom>
                    Your Packing List
                </Typography>  
            : null}
           
            <div style={{ width: '100%', margin: "10px 0 10px", display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                <Button variant="outlined">Add Packing List</Button> 
            </div>
            
            {packignRows?.length > 1 ? 
                <DataGrid
                    rows={packignRows}
                    columns={packingColumns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[10, 20]}
                    checkboxSelection
                    
                />
                : null
            }
        </Box>  
        <Divider style={{margin: "40px 0 40px"}} />
    </div>
  );
}