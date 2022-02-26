
import React from 'react';
import doctor1 from '../../../images/doctor-small.png';
import { Box, Container, Grid, Typography } from '@mui/material';
import Doctor from './Doctor';



const doctors = 
{
        name: 'D. Caudi',
        phone: '+99667741250',
        img: doctor1

}
const Doctors = () => {
  return (
    <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 400, textAlign: 'center', m: 4 }}>
                    OUR DOCTORS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.name}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Box>
        </Container>
  )
}

export default Doctors;