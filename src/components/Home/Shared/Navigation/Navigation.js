import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { Container } from '@mui/material';

function Navigation() {
  const {user, logOut} = useAuth();
    return(
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography style={{color: 'White', textAlign: "center"}}
               variant="h6" component="div" sx={{ flexGrow: 1 }}>
                 Doctors Portal
              </Typography>
              <Link style={{
                   m: 2 ,
                   color: 'white',
                   textDecoration: 'none',
                   background: '#19D3AE',
                   borderRadius: '5px'
                  }} to={'/appointment'}>
                  <Button sx={{}}color="inherit">Appointment</Button>
              </Link>
                {
                 user?.email ?
                 <Button style={{
                  color: 'white',
                   textDecoration: 'none',
                   background: '#19D3AE',
                   borderRadius: '5px'
 
                  }} onClick={logOut} color="inherit">Log Out</Button>
                 :
                <NavLink style={{
                 color: 'white',
                  textDecoration: 'none',
                  background: '#19D3AE',
                  borderRadius: '5px'

                 }} to={'/login'}>
                    <Button color="inherit">Login</Button>
                </NavLink> 
                 }
               </Toolbar>
            </AppBar>
         </Box>
       </Container>
    );
};
export default Navigation;
