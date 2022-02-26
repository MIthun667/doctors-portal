
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
   
   