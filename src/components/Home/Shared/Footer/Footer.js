import { Container } from '@mui/material'
import React from 'react'
import './Footer.css';
import footer from '../../../../images/footer-bg.png';


const footerbg = {
    background: `url(${footer})`,

}
const Footer = () => {
  return (
    <Container style={footerbg}>
        <div className='footer'>
        <div className='empty'>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extractiion</p>
            <p>Check Up</p>
        </div>
        <div className='services'>
            <h2>Services</h2>
        <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extractiion</p>
            <p>Check Up</p>
        </div>
        <div className='health'>
            <h2>Oral Health</h2>
        <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extractiion</p>
            <p>Check Up</p>
        </div>
        <div className='address'>
            <h2>Our Address</h2>
            <p>New York - 101010 Hudson</p>


            <h6>Call Now</h6>
            <button className="call_Center">+203158436132</button>
        </div>
        </div>
        <hr />
        <div className='last'>
            <p>Copyright 2020 All Rights Reserved</p>
            </div>
    </Container>
  )
}

export default Footer