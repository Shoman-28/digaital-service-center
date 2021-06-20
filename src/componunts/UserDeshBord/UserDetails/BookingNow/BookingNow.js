
import React, { useContext } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { Elements } from "@stripe/react-stripe-js";
import SplitForm from '../SplitFrom/SplitFrom';
import { loadStripe } from "@stripe/stripe-js";

import { userContext } from '../../../../App';

const BookingNow = () => {
    const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

    const { user } = useContext(userContext);   
    
    return (
        <div >
                <Sidebar></Sidebar>
          
            <div className="content">
                <div className="d-flex justify-content-between order-list">
                    <div className=""><h4>Booking Now</h4></div>
                    <div className=""><p>{user.displayName}</p></div>
                </div>
                <div className="order-list">
                <Elements stripe={stripePromise} options="{ELEMENTS_OPTIONS}">
                    <SplitForm orderProduct="{orderProduct}" loggedInUser="{loggedInUser}" />
                </Elements>
                </div>
            </div>
            
            
        </div>
    );
};

export default BookingNow;