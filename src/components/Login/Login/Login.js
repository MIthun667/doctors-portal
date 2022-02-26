import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'



export default function Login() {
    const [loginData, setLoginData] = useState({});

    const { user, isLoading, loginUser, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const hanldeLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ boxShadow: ' 5px solid gray' }}>
                <Grid xs={12} md={6} sx={{
                    mt: 40,

                }}>
                    <Typography sx={{ color: '#19D3AE' }} variant='body1' gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={hanldeLoginSubmit}>
                        <TextField sx={{
                            width: '75%',
                            m: 1
                        }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField sx={{
                            width: '75%',
                            m: 1
                        }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name='password'
                            onBlur={handleOnChange}
                            variant="standard" />
                        <br />
                        <Button onClick={handleGoogleSignIn} sx={{
                            color: '#19D3AE',
                            textAlign: 'center'
                        }} variant='text'>Google Sign in</Button>
                        <br />
                        <NavLink
                            style={{
                                textDecoration: 'none',
                                justifyContent: "center"
                            }}
                            to={'/signup'}>
                            <Button sx={{
                                color: '#19D3AE',
                                textAlign: 'center'
                            }} variant='text'>New User ? please Register</Button>

                        </NavLink>
                        <Button sx={{
                            ml: 1,
                            mb: 2,
                            width: '75%',
                            background: "#19D3AE",
                            color: 'black'
                        }} variant="text" type='submit'>Login</Button>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert sx={{
                            width: '75%',
                            ml: 1,
                        }} severity="success">Login Successfully!</Alert>}
                        {authError && <Alert severity='error'>{authError}</Alert>}
                    </form>

                </Grid>
                <Grid xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}
