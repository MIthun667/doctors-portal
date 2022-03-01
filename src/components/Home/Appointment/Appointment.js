import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointHeader from './AppointHeader/AppointHeader';
import AvailableAppoint from './AvailableAppoint/AvailableAppoint';
import './Appointment.css';
import Footer from '../Shared/Footer/Footer';


function Appointment() {
    const [date, setDate] = React.useState(new Date());
    return (
        <>
            <div className='appointment'>
                <Navigation></Navigation>
                <AppointHeader date={date} setDate={setDate}></AppointHeader>
                <AvailableAppoint date={date}></AvailableAppoint>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Appointment;
