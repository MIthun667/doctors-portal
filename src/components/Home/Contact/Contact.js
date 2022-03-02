import { Container } from '@mui/material';
import axios from 'axios';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
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
    const { user } = useAuth();

    const initialInfo = {email: user.email, subject: '', message: '' }
    const [ submit, setSubmit ] = React.useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...submit };
        newInfo[field] = value;
        setSubmit(newInfo);
    }
    


    const handleSubmit = e =>{
        e.preventDefault();
        
        //collect Data
        const contact = {
            ...submit,
        }
        // send to the server 
        axios.post("http://localhost:5000/contactInfos", contact )
        .then(res => {
            console.log(res);
            console.log(res.data);
          })

    }
    return (
        <Container style={contactBg}>
            <div className='contact_form'>
                <div className='contact'>
                    <h6>CONTACT US</h6>
                    <h2>Always connect with us</h2>
                </div>
               <form onSubmit={handleSubmit}>
               <div className='d-flex flex-column bd-highlight mb-3 form'>
                    <input onBlur={handleOnBlur}  type="email" className="form-control email" id="exampleFormControlInput1" placeholder='Email Address' />
                    <input onBlur={handleOnBlur} type="text" className="form-control subject" id="exampleFormControlInput1" placeholder='Subject' />
                    <textarea onBlur={handleOnBlur} className="form-control message" id="exampleFormControlTextarea1" placeholder='Your Messages'></textarea>
                    <button type='submit' className="btn btn-outline-dark button">Submit</button>
                </div>
               </form>
            </div>
        </Container>
    );
}
