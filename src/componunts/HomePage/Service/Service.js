import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

import './Service.css';

const Service = () => {
    return (
        <div className="service">
            <div className="container">
                <div className="service-offer mb-5">
                    <h2 className="text-center pt-4 pb-2">Service We Offers</h2>
                    <p>Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now.</p>
                </div>
                <ServiceCard></ServiceCard>  
                <div className="text-center pb-5 mt-4">
                <Button as={Link} to="/service" variant="success"className="items">View More Offer >>></Button>
                </div>
            </div>           
            
        </div>
    );
};

export default Service;