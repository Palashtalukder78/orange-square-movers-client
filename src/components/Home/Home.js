import React from 'react';
import Banner from './Banner/Banner';
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
        </div>
    );
};

export default Home;