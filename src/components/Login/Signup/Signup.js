import React from 'react';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png'
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';


export default function Signup() {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const {user, registerUser , isLoading, authError} = useAuth();

    const handleOnBlur = e =>{
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
        registerUser(loginData.email, loginData.password, loginData.name, history);
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
                  label="Your Name" 
                  name= 'name'
                  onBlur={handleOnBlur}
                  variant="standard" />
              <TextField sx={{
                  width: '75%',
                  m: 1
              }}
                  id="standard-basic" 
                  label="Your Email" 
                  type={'email'}
                  name= 'email'
                  onBlur={handleOnBlur}
                  variant="standard" />
              <TextField sx={{
                  width: '75%',
                  m: 1
              }}
                  id="standard-basic" 
                  label="Password" 
                  type= "password"
                  name= 'password'
                  onBlur={handleOnBlur}
                  variant="standard" />
              <TextField sx={{
                  width: '75%',
                  m: 1
              }}
                  id="standard-basic" 
                  label="Confirm Password" 
                  type= "password"
                  name= 'password2'
                  onBlur={handleOnBlur}
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
                      ml: 1,
                      mb: 2,
                      width: '75%',
                      background: "#19D3AE",
                      color: 'black'
                      }} variant='text' type='submit'>Register</Button>
            </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert sx={{
                width: '75%',
                ml: 1,
                mt: 2
            }} severity="success">User Created Successfully!</Alert>}
            {authError && <Alert severity='error'>{authError}</Alert>}
        </Grid>
        <Grid xs={12} md={6}>
            <img style={{width: '100%'}} src={login} alt="" />
        </Grid>
    </Grid>
</Container>
  )
}
