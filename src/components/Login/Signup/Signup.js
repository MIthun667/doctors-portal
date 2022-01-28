import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'
import { Container, Grid, Typography, TextField, Button, CircularProgress } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';


export default function Signup() {
    const [loginData, setLoginData] = useState({})

    const {user, registerUser , isLoading} = useAuth();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const hanldeLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert("Your password didn't match");
        }
        registerUser(loginData.email, loginData.password);
        e.preventDeafult();
    }
  return (
    <Container>
    <Grid container spacing={2} sx={{ boxShadow:' 5px solid gray' }}>
        <Grid xs={12} md={6} sx={{
            mt: 40,
           
            }}>
            <Typography sx={{color: '#19D3AE'}} variant='body1' gutterBottom>
                Register
            </Typography>
            {!isLoading && <form onSubmit={hanldeLoginSubmit}>
              <TextField sx={{
                  width: '75%',
                  m: 1
              }}
                  id="standard-basic" 
                  label="Name" 
                  name= 'name'
                  type={'name'}
                  onChange={handleOnChange}
                  variant="standard" />
              <TextField sx={{
                  width: '75%',
                  m: 1
              }}
                  id="standard-basic" 
                  label="Your Email" 
                  type={'email'}
                  name= 'email'
                  onChange={handleOnChange}
                  variant="standard" />
              <TextField sx={{
                  width: '75%',
                  m: 1
              }}
                  id="standard-basic" 
                  label="Password" 
                  type= "password"
                  name= 'password'
                  onChange={handleOnChange}
                  variant="standard" />
              <TextField sx={{
                  width: '75%',
                  m: 1
              }}
                  id="standard-basic" 
                  label="Confirm Password" 
                  type= "password"
                  name= 'password2'
                  onChange={handleOnChange}
                  variant="standard" />
                  <NavLink 
                  style={{
                      textDecoration: 'none',
                      justifyContent: "center"
                   }}
                  to={'/login'}>
                      <Button sx={{
                          color: '#19D3AE',
                          textAlign: 'center'}} variant='text'>Already Register? please Login</Button>
                  </NavLink>
                  <Button  sx={{
                      backgroundColor: '#19D3AE',
                      width: '75%', 
                      m: 1
                      }} variant='contained' type='submit'>Register</Button>
            </form>}
            {isLoading && <CircularProgress />}
        </Grid>
        <Grid xs={12} md={6}>
            <img style={{width: '100%'}} src={login} alt="" />
        </Grid>
    </Grid>
</Container>
  )
}
