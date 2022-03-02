import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Navbar.css';
import Services from './../../Serviecs/Services';



function Navigation() {
  const { user, logOut } = useAuth();


  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light z-index-1">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">The Dental Health</a>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Dental Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
              </li>
            </ul>
           
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
        </div>
      </nav>
    </Container>
  );
};
export default Navigation;
