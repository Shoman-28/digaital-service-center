import React from 'react';
import './Footer.css';
import appleIcon from '../../../image/apple.png';
import googleIcon from '../../../image/googe-play.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagramSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id="coustom-footer" className="">
            <div className="container pt-5 ">
                <div className="row m-auto">
                    <div className="col-md-4 mb-3">
                        <div className="coustom-font">
                            <h1>Download</h1>
                            
                                <img className="google-img" src={googleIcon} alt=""/><br/>
                                <img className="apple-img " src={appleIcon} alt=""/> 
                            
                        </div>
                    </div> 
                    <div className="col-md-4 mb-3">
                        <div className="coustom-font">
                            <h2 className="">Contact Us</h2>                                             
                            <h6>House #269, Road #01, <br/>Hossainpur, Kishoreganj.</h6>
                            <h6>Email:northstar9928@gmail.com</h6>
                            <h6>Contact no: 01636130825</h6>                  
                                          
                        </div>
                    </div> 
                    <div className="col-md-4 mb-3 ">
                        <div className="coustom-font">
                            <h2>Get in Touch</h2>      
                                                                   
                            <FontAwesomeIcon className="p-1 custom-icon" icon={faFacebook} />  
                            <FontAwesomeIcon className="p-1 custom-icon" icon={faInstagramSquare} />
                            <FontAwesomeIcon className="p-1 custom-icon" icon={faYoutube} />  
                                
                        </div>
                    </div>                     
                </div>
                <div className="container mt-5 pb-4 d-flex justify-content-center coustom-copyright">
                        <small> ©2021. All rights reserved. Shoman, Kishoreganj. </small>
                </div>
            </div>
        </div>
    );
};

export default Footer;
