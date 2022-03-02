import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import BookingModal from '../BookingModal/BookingModal';


export default function Booking({booking, date}) {
    const {name, time, space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
    <Grid item sx={{my: 2}} xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{py: 5}}>
            <Typography sx={{ 
                color: '#848B9F',
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
                <button className='btn btn-outline-dark' onClick={handleBookingOpen}>Book Appoinment</button>
            </Box>
            
        </Paper>
    </Grid>
    <BookingModal
    date={date}
    booking={booking}
    openBooking={openBooking}
    handleBookingClose={handleBookingClose}
    >
    </BookingModal>
    </>
  )
}
