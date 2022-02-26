import React from 'react';
import ApointmentBanner from '../ApointmentBanner/ApointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DentalInfo from '../DentalInfo/DentalInfo';
import Doctor from '../Doctors/Doctor';
import Services from '../Serviecs/Services';
import Navigation from '../Shared/Navigation/Navigation';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <DentalInfo></DentalInfo>
            <ApointmentBanner></ApointmentBanner>
            <Testimonial></Testimonial>
            <Doctor></Doctor>
            <Contact></Contact>
            
        </div>
    )
};

export default Home;
