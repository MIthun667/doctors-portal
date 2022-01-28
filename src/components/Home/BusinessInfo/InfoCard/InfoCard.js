import { Container } from '@mui/material';
import React from 'react';
import BusinessInfo from '../BusinessInfo';


const infosData = [
    {
        id: 1,
        title: 'Opening Hours',
        description: 'We are open 24/7',
        background: 'primary',
    },
    {
        id: 2,
        title: 'Visit Our Location',
        description: 'Dhaka-1216, Bangladesh',
        background: 'dark',
    },
    {
        id: 3,
        title: 'Call us now',
        description: '+880177777776',
        background: 'primary',
    }
]

function InfoCard() {
  return (
      <Container>
          <Grid container spacing={2}>
          {
              infosData.map(booking=> <BusinessInfo
              key={info.is}
              info={info}
              ></BusinessInfo>)
          }
        </Grid>
      </Container>
  )
}

export default InfoCard;
