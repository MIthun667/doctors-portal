import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png'
import { Container, Typography } from '@mui/material';

export default function DentalInfo() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{
                width: 400,
              }} src={treatment} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'left',
            alignItems: 'center'
          }}>
            <Box>
              <Typography variant='h4' sx={{ my: 2 }} style={{ color: 'black', fontWeight: 500 }}>
                Exceptional Dental <br />
                Care, on Your Terms
              </Typography>
              <Typography variant='h6' sx={{ mb: 2 }} style={{ color: 'gray', fontSize: 14, fontWeight: 300 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi earum accusamus, ut provident sint vero culpa error laudantium similique fuga, consectetur ad asperiores aliquam cum. Est nemo excepturi unde neque explicabo ipsam nobis error exercitationem nam, enim aliquam quis voluptas quibusdam, facere reiciendis sit voluptatem aperiam id vitae magnam ipsa.
              </Typography>
              <button className='btn btn-outline-dark'>Learn More</button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
