import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #19D3AE',
  boxShadow: 5,
  p: 4,
}

export default function BookingModal({openBooking, handleBookingClose, booking, date}) {
  const {name, time} = booking;

  const handleBookingSubmit = e =>{
    alert('Book Appoinment');
    // collect data
    // send to the server
    handleBookingClose();
    e.preventDefault();
  }

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography style={{color: '#19D3AE', textAlign: 'center'}} id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
            <TextField
              sx={{width: '100%', m: 1}}
              disabled
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{width: '100%', m: 1}}
              type={'name'}
              id="outlined-size-small"
              defaultValue='Your Name'
              size="small"
            />
            <TextField
              sx={{width: '100%', m: 1}}
              id="outlined-size-small"
              defaultValue='Phone Number'
              size="small"
            />
            <TextField
              sx={{width: '100%', m: 1}}
              id="outlined-size-small"
              defaultValue='Your Email'
              size="small"
            />
            <TextField
              disabled
              sx={{width: '100%', m: 1}}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button style={{
              color: 'white',
              justifyContent: 'center',
              textDecoration: 'none',
              background: '#19D3AE',
              borderRadius: '5px'

            }} type='Submit' variant='contained'>Book Appointment</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
  );
}
