import React from 'react';
import ApointmentBanner from '../ApointmentBanner/ApointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Serviecs/Services';
import Navigation from '../Shared/Navigation/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ApointmentBanner></ApointmentBanner>
        </div>
    )
};

export default Home;
