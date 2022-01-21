import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


export default function Booking({booking}) {
    const {name, time, space} = booking;
  return (
    <Grid item sx={{my: 2}} xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{py: 5}}>
            <Typography sx={{ 
                color: 'info.main',
                fontWeight: 600,
                textAlign: 'center'
                }} variant="h5" gutterBottom component="div">
             {name}
            </Typography>
            <Typography sx={{ 
                color: 'gray',
                fontWeight: 400,
                textAlign: 'center'
                }}variant="h6" gutterBottom component="div">
             {time}
            </Typography>
            <Typography sx={{ 
                color: 'gray',
                fontWeight: 200,
                textAlign: 'center'
                }} variant="caption" display="block" gutterBottom>
                {space} Spaces Available
            </Typography>
            <Box sx={{textAlign: 'center'}}>
                <Button variant='contained'>Book Appoinment</Button>
            </Box>
            
        </Paper>
    </Grid>
  )
}
