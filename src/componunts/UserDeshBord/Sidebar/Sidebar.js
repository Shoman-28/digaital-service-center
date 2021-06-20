import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import { handleSignOut } from "../../firebase/FirebaseAuth";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { user, setUser, admin, setAdmin } = useContext(userContext);
  const [Style, setStyle] = useState(true);
  const logOut = () => {
    handleSignOut().then((res) => {
      setAdmin(false);
      setUser({});
    });
  };
  return (
    <>
    <div className="sidebar">
      <h2 as={Link} to="/home">Digital Service Center</h2>

      <a className="active" href="/orderList">Order List</a>
      <a href="/addServices">Add Services</a>
      <a href="/makeadmin">Make Addmin</a>
      <a href="/manageServices">Manage Services</a>
      <a href="/bookingNow"> Booking Now </a>
      <a href="/bookingList"> Booking List </a>
      <a href="/review"> Review </a>
      
      <a href="/home" onClick={logOut}> LogOut </a>

 
  </div>
</>
  );
};

export default Sidebar;
