import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '11.05 AM - 11.30',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5.00 AM - 6.30',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7.00 AM - 8.30',
        space: 5,
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '8.00 AM - 9.00',
        space: 10,
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00',
        space: 10,
    }
]
export default function AvailableAppoint({date}) {
  return (
    <Container>
        <Typography sx={{
                mb: 2,
                color: '#19D3AE',
                fontWeight: 400,
                textAlign: 'center'
                }} variant='h3'>
        Available Appointments on {date.toDateString()}
        </Typography>
        <Grid container spacing={2}>
          {
              bookings.map(booking=> <Booking
              key={booking.id}
              booking={booking}
              date={date}
              ></Booking>)
          }
        </Grid>
    </Container>
    );
}

