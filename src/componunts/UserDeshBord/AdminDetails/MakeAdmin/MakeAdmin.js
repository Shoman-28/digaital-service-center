import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { userContext } from "../../../../App";
import Sidebar from "../../Sidebar/Sidebar";

import "./MakeAdmin.css";

const MakeAdmin = () => {

  const { user } = useContext(userContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://arcane-refuge-91321.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Sidebar />
      <div class="content">
        <div className="d-flex justify-content-between order-list">
          <div className="">
            <h4>Make Addmin</h4>
          </div>
          <div className="">
            <h6>{user.displayName}</h6>
          </div>
        </div>
        <div className="order-list">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5>Email</h5>
            <input
              name="email"
              className="email mr-1"
              {...register("email", { required: true })}
              placeholder="jon@gmail.com"
            />
            <Button type="submit" variant="success" className="submit-button">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
