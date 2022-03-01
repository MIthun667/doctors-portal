import {Container} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Navbar.css';



function Navigation() {
  const { user, logOut } = useAuth();


  return (
    <Container sx={{
      justifyContent:"flex-end",
      backgroundColor: 'black'
      }}>
      <Box  sx={{
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      mt: 3,
    }}>
        
      <div className='nav'>
            <a href="home">Home</a>
            <a href="home">About</a>
            <a href="home">Dental Services</a>
            <a href="home">Reviews</a>
            <a href="home">Contact Us</a>
          </div>
          <div>
            {
              user?.email ?
                <button className='btn btn-outline-dark' onClick={logOut}>Log Out</button>
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

      
      </Box>
</Container>
  );
};
export default Navigation;
