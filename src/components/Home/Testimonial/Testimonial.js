import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import { Box } from '@mui/system';

export default function Testimonail(props) {
  return (
    <Container sx={{my: 5}}>
          <Typography variant='h6' sx={{color: '#5ce7ed', fontWeight: 400}}>
              Testimonial
          </Typography>
          <Typography variant='h3' sx={{color: '#Black', fontWeight: 500}}>
              What's Our Patients <br />
              Says
          </Typography>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Card sx={{ maxWidth: 345, m: 2}}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, iusto ullam dolor at et hic cum dicta quo. Voluptates quia, quae odit vitae omnis odio assumenda eius facilis atque ipsam quidem porro, libero distinctio! Labore magni laboriosam unde, eaque, commodi tenetur asperiores numquam nobis sequi consequatur voluptatum, sint fuga repudiandae.
                    </Typography>
                </CardContent>
                <CardContent sx={
                    {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                    }
                    }>
                       <img style={{
                        height:'50px',
                        width: '50px'
                        }} src={people1} alt="" />
                     <CardContent>
                    <Typography variant='subtitle2' gutterBottom component="div" sx={{color: '#5ce7ed', fontWeight: 400, marginLeft: 1}}>
                       Winson Herry
                     </Typography>
                     <Typography variant='body2' gutterBottom component="div" sx={{color: 'gray', fontWeight: 400, marginLeft: 1}}>
                      California
                     </Typography>
            
                    </CardContent>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, m: 2}}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, iusto ullam dolor at et hic cum dicta quo. Voluptates quia, quae odit vitae omnis odio assumenda eius facilis atque ipsam quidem porro, libero distinctio! Labore magni laboriosam unde, eaque, commodi tenetur asperiores numquam nobis sequi consequatur voluptatum, sint fuga repudiandae.
                    </Typography>
                </CardContent>
                <CardContent sx={
                    {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                    }
                    }>
                       <img style={{
                        height:'50px',
                        width: '50px'
                        }} src={people2} alt="" />
                     <CardContent>
                    <Typography variant='subtitle2' gutterBottom component="div" sx={{color: '#5ce7ed', fontWeight: 400, marginLeft: 1}}>
                       Winson Herry
                     </Typography>
                     <Typography variant='body2' gutterBottom component="div" sx={{color: 'gray', fontWeight: 400, marginLeft: 1}}>
                      California
                     </Typography>
            
                    </CardContent>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, m: 2}}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, iusto ullam dolor at et hic cum dicta quo. Voluptates quia, quae odit vitae omnis odio assumenda eius facilis atque ipsam quidem porro, libero distinctio! Labore magni laboriosam unde, eaque, commodi tenetur asperiores numquam nobis sequi consequatur voluptatum, sint fuga repudiandae.
                    </Typography>
                </CardContent>
                <CardContent sx={
                    {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                    }
                    }>
                       <img style={{
                        height:'50px',
                        width: '50px'
                        }} src={people3} alt="" />
                     <CardContent>
                    <Typography variant='subtitle2' gutterBottom component="div" sx={{color: '#5ce7ed', fontWeight: 400, marginLeft: 1}}>
                       Winson Herry
                     </Typography>
                     <Typography variant='body2' gutterBottom component="div" sx={{color: 'gray', fontWeight: 400, marginLeft: 1}}>
                      California
                     </Typography>
            
                    </CardContent>
                </CardContent>
            </Card>
        </Box>
    </Container>
  )
}
