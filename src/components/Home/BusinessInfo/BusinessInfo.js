import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import InfoCard from './InfoCard/InfoCard';
import { Container } from '@mui/material';



const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 24/7',
        icon: faClock,
        background: '#1CC7C1',
    },
    {
        title: 'Visit Our Location',
        description: 'Dhaka-1216, Bangladesh',
        icon: faMapMarker,
        background: '#3A4256',
    },
    {
        title: 'Call us now',
        description: '+880177777776',
        icon: faPhone,
        backgroundColor: '#1CC7C1',
    }
]

const BusinessInfo = () => {
  return (
    <Container sx={{alignItems: 'center'}}>
          <div className="d-flex justify-content-around">
            {
              infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
          </div>
      </Container>
  )
}

export default BusinessInfo