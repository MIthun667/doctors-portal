import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Navbar.css';

function Navigation() {
  const { user, logOut } = useAuth();


  return (
    <Container>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Doctors Portal</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            
          </div>
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
        </div>
      </nav>
    </Container>
  );
};
export default Navigation;
