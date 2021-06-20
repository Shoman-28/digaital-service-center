import React from 'react';
import './ServiceDeatils.css';
import fastService from '../../../image/fast.png';
import quickRspons from '../../../image/quick-response.png';
import service from '../../../image/svg.jpg';

const ServiceDeatils = () => {
    return (
        <div className="Service-bg mb-5">
            <div className="container">
                <div className="row services pt-5">
                    <div className="col-md-6 services-containt">
                        <h5>What we Do</h5>
                        <h1>Why Choose Us</h1>
                        <div className="row pt-4">
                            <div className="col-sm-3">
                                <img src={quickRspons} className="service-details-icon" style={{width:'60px', height:'70px'}} alt=""/>
                            </div>
                            <div className="col-sm-9">
                                <h4>Quick Response</h4>
                                <p>Emergency response time is one hour or less guaranteed at live person will answer your call or you can enter service response time is one hour</p>
                            </div>                        
                        </div>
                        <div className="row">
                        <div className="col-sm-3">
                        <img src={fastService} className="service-details-icon" style={{width:'60px', height:'70px'}} alt=""/>                      

                        </div>
                            <div className="col-sm-9">
                                <h4>Very Fast Services</h4>
                                <p>Emergency response time is one hour or less guaranteed at live person will answer your call or you can enter service response time is one hour                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 service-Details-img pb-5">
                        <img src={service} style={{width:'100%', height:'60vh'}} alt=""/>
                    </div>
                </div>            
            </div>    
        </div>
    );
};

export default ServiceDeatils;