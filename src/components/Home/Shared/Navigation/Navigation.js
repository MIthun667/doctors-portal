import { Button, Container } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

function Navigation() {
  const { user, logOut } = useAuth();
  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav my-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Dental service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contact Us</a>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};
export default Navigation;
