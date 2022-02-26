import { Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import contact from '../../../images/appointment-bg.png';
import './Contact.css';

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
            <Box style={contactBg} sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ mt: 5 }} style={{ fontWeight: 400, color: '#5ce7ed', textAlign: "center" }}>
                    Contact Us
                </Typography>
                <Typography variant="h3" gutterBottom component="div" sx={{ mb: 5 }} style={{ fontWeight: 600, color: 'White', textAlign: "center" }}>
                    Always Contact with Us
                </Typography>
                <Box sx={style}>
                    <form className='contact'>
                        <div className="mb-3">
                            <input type="email" className="form-control outline-dark" placeholder='Email'/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control outline-dark" placeholder='Subject'/>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" placeholder='Message' rows="3"></textarea>
                        </div>
                        <button className='btn btn-outline-dark text-center' type='submit'>Submit</button>
                    </form>
                </Box>
            </Box>
        </Container>
    );
}
