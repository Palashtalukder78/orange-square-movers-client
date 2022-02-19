import React from 'react';
import Addressing from './Addressing/Addressing';
import BackgroundOne from './BackgroundOne/BackgroundOne';
import Banner from './Banner/Banner';
import Countdown from './Countdown/Countdown';
import DontOverPay from './DontOverPay/DontOverPay';
import OurMainPriority from './OurMainPriority/OurMainPriority';
import Review from './Review/Review';
import Services from './Services/Services';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <BackgroundOne></BackgroundOne>
            <OurMainPriority></OurMainPriority>
            <DontOverPay></DontOverPay>
            <Addressing></Addressing>
            <Countdown></Countdown>
        </div>
    );
};

export default Home;