import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function Navigation() {
  const { user, logOut } = useAuth();


  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{
                   boxShadow: 'none',
                   backgroundColor: 'white',
                   color: 'black'
                  }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            {
              user?.email ?
                <Box>
                  <NavLink style={{
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px'
                  }} to={'/dashboard'}>
                    <button className='btn btn-outline-dark'>Dashboard</button>
                  </NavLink>

                  <button className='btn btn-outline-dark' onClick={logOut}>Log Out</button>
                </Box>
                :
                <NavLink style={{
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px'
                }} to={'/login'}>
                  <button className='btn btn-outline-dark'>Login</button>
                </NavLink>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};
export default Navigation;
