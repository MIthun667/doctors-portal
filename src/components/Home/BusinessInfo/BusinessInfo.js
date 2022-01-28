import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function BusinessInfo() {
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

  return(
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((infosData, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
              <Typography variant='h4'>
                  {infosData.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  {infosData.description}
              </Typography>
              </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}

export default BusinessInfo;
