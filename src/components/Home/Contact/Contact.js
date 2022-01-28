import { Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import contact from '../../../images/appointment-bg.png';

const style = {
    justifyContent: 'center',
    alignItems: 'center',
    width: 800,
    bgcolor: 'background.paper',
    p: 4,
  }

const contactBg = {
    background: `url(${contact})`,
    backgroundColor: 'rgba(45, 58, 74, 0.5)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}



export default function Contact() {
  return (
      <Container>
          <Box  style={contactBg} sx={{ flexGrow: 1 }}>
               <Typography variant="h5" gutterBottom component="div" sx={{mt: 2}} style={{fontWeight: 400,color: '#5ce7ed', textAlign: "center"}}>
                    Contact Us
                </Typography>
                <Typography variant="h3" gutterBottom component="div" sx={{mb: 5}} style={{fontWeight: 600, color: 'White', textAlign: "center"}}>
                    Always Contact with Us
                </Typography>
                         <Box sx={style}>
                         <form>
                           <TextField sx={{
                            width: '100%',
                            m: 1,
                            backgroundColor: 'white'
                        }}
                            id="standard-basic" 
                            label="Your Email" 
                            type='email'
                            name= 'email'
                            variant="standard" />
                        <TextField sx={{
                            width: '100%',
                            m: 1
                             }}
                            id="standard-basic" 
                            label="Subject" 
                            name= 'subject'
                            type='Subject'
                                variant="standard" />
                        <TextField
                             sx={{width: '100%', m: 1,
                             height:'150px'
                             }}
                             type='text'
                             id="outlined-size-small"
                             defaultValue='Your Name'
                             size="small"
                             />
                       </form>
                         </Box>
          </Box>
      </Container>
  );
}
