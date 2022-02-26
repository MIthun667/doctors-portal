import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Doctor = ({name, phone, img}) => {


    return (
        <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, textAlign: 'center' }}>
        <CardMedia
          style={{ width: 'auto', height: '80px', margin: '0 auto' }}
          component="img"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {phone}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    )
}

export default Doctor;