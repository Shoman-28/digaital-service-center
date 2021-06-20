import React, { useContext } from "react";
import "./BookingList.css";
import Sidebar from "../../Sidebar/Sidebar";
import BookingCard from "./BookingCard/BookingCard";
import { userContext } from "../../../../App";

const BookingList = () => {
  const { user } = useContext(userContext);
  return (
    <div className="">
      <Sidebar></Sidebar>

      <div className="content">
        <div className="d-flex justify-content-between order-list">
          <h3>Your Order List</h3>
          <h6>{user.displayName}</h6>
        </div>
        <div className="order-list">
        <BookingCard />
        </div>
       
      </div>
    </div>
  );
};

export default BookingList;
