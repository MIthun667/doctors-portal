import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import doctor from '../../../images/doctor-small.png';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Doctors() {
  return (
    <Container>
        <Typography variant='h4' sx={{
            color: '#5ce7ed', 
            fontWeight: 500,
            textAlign: 'center',
            mb: 3
            }}>Our Doctors</Typography>
        <Box sx={{ 
            display: 'flex',
            justifyContent: "center",
         }}>
        <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
            <CardMedia
                component="img"
                height=""
                image={doctor}
                alt=""
            />
            <CardContent sx={{}}>
            <Typography sx={{textAlign: 'center'}} gutterBottom variant="h6" component="div">
                     Dr. Caudi
                </Typography>
                <Typography sx={{textAlign: 'center'}} gutterBottom variant="subtitle1" component="div">
                     <FontAwesomeIcon icon='coffee' />017595636696
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: 0, ml: 2, mr:2 }}>
            <CardMedia
                component="img"
                height=""
                image={doctor}
                alt=""
            />
            <CardContent sx={{}}>
            <Typography sx={{textAlign: 'center'}} gutterBottom variant="h6" component="div">
                     Dr. Caudi
                </Typography>
                <Typography sx={{textAlign: 'center'}} gutterBottom variant="h6" component="div">
                     Dr. Caudi
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
            <CardMedia
                component="img"
                height=""
                image={doctor}
                alt=""
            />
            <CardContent sx={{justifyContent: 'center'}}>
                <Typography sx={{textAlign: 'center'}} gutterBottom variant="h6" component="div">
                     Dr. Caudi
                </Typography>
            </CardContent>
            
        </Card>
        </Box>
        
    </Container>
  );
}
