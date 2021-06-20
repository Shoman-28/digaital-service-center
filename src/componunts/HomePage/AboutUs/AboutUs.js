import React from 'react';
import './AboutUs.css';
import AboutImg from '../../../image/welcome .jpg';
import missionIcon from '../../../image/mission.png';
import teamsIcon from '../../../image/group.png';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row about-us mt-5 mb-4">
                <div className="col-md-6 mb-5">
                    <img src={AboutImg} alt=""/>
                </div>
                <div className="col-md-6">                               
                    <div className="about-heading">
                        <h3>welcome to our digital service center</h3>
                        <h1>We're Here To Help You Repair Service</h1>                            
                    </div>
                    <div className="row mt-3"> 
                        <div className="col-sm-2 about-icon">
                            <img src={missionIcon} alt="" srcset=""/>
                        </div>
                        <div className="col-sm-9">
                            <h4>Our Mission</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorum enim cum voluptas ad corporis et facere labore error consequuntur.                                
                            </p>
                        </div> 
                    </div>
                    <div className="row"> 
                        <div className="col-sm-2 about-icon">
                            <img src={teamsIcon} alt="" srcset=""/>
                        </div>
                        <div className="col-sm-9">
                            <h4>Professional Team</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorum enim cum voluptas ad corporis et facere labore error consequuntur.                                
                            </p>
                        </div> 
                    </div>
                        
                    
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;