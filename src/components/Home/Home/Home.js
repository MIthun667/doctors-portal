import React from 'react';
import ApointmentBanner from '../ApointmentBanner/ApointmentBanner';
import Banner from '../Banner/Banner';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Contact from '../Contact/Contact';
import DentalInfo from '../DentalInfo/DentalInfo';
import Doctors from '../Doctors/Doctors';
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
            <Doctors></Doctors>
            <Contact></Contact>
            
        </div>
    )
};

export default Home;
