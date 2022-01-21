import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appointment from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${appointment})`,
    backgroundColor: 'rgba(45, 58, 74, 0.5)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

function ApointmentBanner() {
  return(
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
          <img 
          style={{width: 400,
            marginTop: '-110px',
            marginLeft:300
          }}src={doctor} alt=""/>
      </Grid>
      <Grid item xs={12} md={8} sx={{
         display: 'flex',
         justifyContent: 'flex-start',
         textAlign: 'left' ,
         alignItems: 'center'
         }}>
          <Box>
            <Typography variant='h6' sx={{mb: 5}} style={{color: '#5ce7ed'}}>
              Appointment
            </Typography>
            <Typography variant='h4' sx={{mb: 3}} style={{color: 'white'}}>
              Make an Appointment Today
            </Typography>
            <Typography variant='h6' sx={{mb: 2}}style={{color: 'white', fontSize: 14, fontWeight: 300}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellat quam quod, quos incidunt labore.
            </Typography>
            <Button variant='contained' style={{backgroundColor: '#5ce7ed'}}>Learn More</Button>
          </Box>
      </Grid>
    </Grid>
  </Box>
  )
}

export default ApointmentBanner;
