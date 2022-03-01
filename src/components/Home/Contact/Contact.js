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
    borderRadius: '5px',
}



export default function Contact() {

    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Container style={contactBg}>
            <div className='contact_form'>
            <div className='contact'>
                <h6>CONTACT US</h6>
                <h2>Always connect with us</h2>
            </div>
            <div className='d-flex flex-column bd-highlight mb-3 form'>
                <input type="email" className="form-control email" id="exampleFormControlInput1" placeholder='Email Address'/>
                <input type="email" className="form-control subject" id="exampleFormControlInput1" placeholder='Subject'/>
                <textarea className="form-control message" id="exampleFormControlTextarea1" placeholder='Your Messages'></textarea>
                <button type='submit' className="btn btn-outline-dark button">Submit</button>
            </div>
            </div>
        </Container>
    );
}
