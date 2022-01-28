import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'


export default function Login() {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const hanldeLoginSubmit = e =>{
        alert('submit');
        e.preventDeafult();
    }
  return (
      <Container>
          <Grid container spacing={2} sx={{ boxShadow:' 5px solid gray' }}>
              <Grid xs={12} md={6} sx={{
                  mt: 40,
                 
                  }}>
                  <Typography sx={{color: '#19D3AE'}} variant='body1' gutterBottom>
                      Login
                  </Typography>
                  <form onSubmit={hanldeLoginSubmit}>
                    <TextField sx={{
                        width: '75%',
                        m: 1
                    }}
                        id="standard-basic" 
                        label="Your Email" 
                        name= 'email'
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField sx={{
                        width: '75%',
                        m: 1
                    }}
                        id="standard-basic" 
                        label="Your Password" 
                        type= "password"
                        name= 'password'
                        onChange={handleOnChange}
                        variant="standard" />
                        <NavLink 
                        style={{
                            textDecoration: 'none',
                            justifyContent: "center"
                         }}
                        to={'/signup'}>
                            <Button sx={{
                                color: '#19D3AE',
                                textAlign: 'center'}} variant='text'>New User ? please Register</Button>
                        </NavLink>
                        <Button  sx={{
                            backgroundColor: '#19D3AE',
                            width: '75%', 
                            m: 1
                            }} variant='contained' type='submit'>Login</Button>
                  </form>
              </Grid>
              <Grid xs={12} md={6}>
                  <img style={{width: '100%'}} src={login} alt="" />
              </Grid>
          </Grid>
      </Container>
  )
}
