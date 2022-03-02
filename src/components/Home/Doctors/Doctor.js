import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CallIcon from '@mui/icons-material/Call';


const Doctor = ({ doctor }) => {


  return (
    <Container sx={{ my: 2 }}>
      <Grid item xs={4} sm={4} md={4} sx={{ display: 'flex' }}>
        <Card sx={{ minWidth: 375, border: 0, boxShadow: 0, textAlign: 'center' }}>
          <CardMedia
            style={{ width: 'auto', height: '80px', margin: '0 auto' }}
            component="img"
            image={doctor.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {doctor.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <CallIcon sx={{
                color: 'gray',
                width: '15px'
              }} />
              {doctor.phone}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 375, border: 0, boxShadow: 0, textAlign: 'center' }}>
          <CardMedia
            style={{ width: 'auto', height: '80px', margin: '0 auto' }}
            component="img"
            image={doctor.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {doctor.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {doctor.phone}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 375, border: 0, boxShadow: 0, textAlign: 'center' }}>
          <CardMedia
            style={{ width: 'auto', height: '80px', margin: '0 auto' }}
            component="img"
            image={doctor.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {doctor.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {doctor.CallIcon}
              {doctor.phone}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  )
}

export default Doctor;