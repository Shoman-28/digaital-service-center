import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ContactFrom from '../ContactFrom/ContactFrom';
import Service from '../Service/Service';
import ServiceDeatils from '../ServiceDeatils/ServiceDeatils';
import Testimonials from '../Testimonials/Testimonials';
import Slider from './Slider';
import './Home.css'


const Home = () => {
    return (
        <div className="bgg-color">           
            <Slider></Slider>
            <AboutUs></AboutUs>
            <Service></Service>
            <ServiceDeatils></ServiceDeatils>
            <Testimonials></Testimonials>
            <ContactFrom></ContactFrom>
        </div>
    );
};

export default Home;