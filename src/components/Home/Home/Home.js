import React from 'react';
import ApointmentBanner from '../ApointmentBanner/ApointmentBanner';
import Banner from '../Banner/Banner';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Contact from '../Contact/Contact';
import DentalInfo from '../DentalInfo/DentalInfo';
import Doctors from '../Doctors/Doctors';
import Services from '../Serviecs/Services';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Testimonials from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <BusinessInfo></BusinessInfo>
            <Services></Services>
            <DentalInfo></DentalInfo>
            <ApointmentBanner></ApointmentBanner>
            <Testimonials></Testimonials>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    )
};

export default Home;
