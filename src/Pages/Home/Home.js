import React from 'react';
import Footer from '../../Common/Footer';
import Banner from './Banner';
import Doctor from './Doctor';
import Message from './Message';
import Service from './Service';
import Testimonial from './Testimonial';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='mx-auto px-12'>
            <Banner/>
            <Service/>
            <Treatment/>
            <Doctor/>
            <Testimonial/>
            <Message/>
            <Footer/>
        </div>
    );
};

export default Home;