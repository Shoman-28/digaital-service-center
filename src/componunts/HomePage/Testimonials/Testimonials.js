import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from 'react';
import './Testimonials.css';


const Testimonials = () => {

    const [review, setReview]=useState([])
    console.log(review)
    useEffect(()=>{
        fetch("https://arcane-refuge-91321.herokuapp.com/testimonials")
        .then(res=>res.json())
        .then(data =>{
            setReview(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div className="pb-4 pt-4">
            <h2 className="text-center mb-5 pb-4">Testimonials</h2> 
            <div className="testimonials-carousel m-auto">
            
                <Carousel autoPlay={true} interval={4000} infiniteLoop={true}>
                {review.map(rv=>              
                   
                    <div className="card mb-2" style={{maxWidth: '632px'}}>
                        <div className="row g-0">
                            <div className="col-md-4 userReview-img m-auto">
                                <img src={rv.image} className="" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{rv.name}</h4>
                                    <p className="card-text">{rv.review}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>                  
                
                    )}   
                             
                </Carousel>
            
            </div>
            
        </div>   
            
        
    );
};

export default Testimonials;