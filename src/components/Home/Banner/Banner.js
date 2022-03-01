import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import './Banner.css'
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const bannerBg = {
  background: `url(${bg})`,
  
 
}
const verticalCenter = {
  display: 'flex',
  alignItems: 'center', 
  height: 450,
}

function Banner() {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1,}}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCenter, textAlign: 'left'}} item xs={12} md={6}>
          <Box>
          <Typography variant='h3'>Your New Smile <br />
          Start Here
          </Typography>
          <Typography variant='h6' sx={{color: 'gray', fontSize: 14, fontWeight: 300, my: 4}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eaque doloribus ducimus porro repudiandae suscipit non eligendi 
            sequi illo consequuntur nemo! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>
          <NavLink to={'/appointment'}>
         <button className='btn btn-outline-dark'>Get Appointment</button>
          </NavLink>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width: '450px'}} src={chair} alt="" />
        </Grid>
      </Grid>
      </Container>
  );
}

export default Banner;
