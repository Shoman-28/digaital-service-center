import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { userContext } from "../../../../App";
import './Review.css';
import Sidebar from "../../Sidebar/Sidebar";

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(userContext);
  const onSubmit = (data) => {
    const reviewInfo = {
      name: data.name,
      descripation: data.companyName,
      review: data.comment,
      image: user.photoURL,
    };
    console.log(reviewInfo);

    fetch("https://arcane-refuge-91321.herokuapp.com/userReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
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
    <div className="userDeshbord">
      <Sidebar></Sidebar>

      <div className="content">
          <div className="review">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <input
            name="name"
            className="name"
            {...register("name", { required: true })}
            placeholder="Your Name"
          />{" "}
          <br />
          <input
            name="companyName"
            className="email"
            {...register("companyName", { required: true })}
            placeholder="Company's name Dasignation"
          />{" "}
          <br />
          <textarea
            name="comment"
            className="massage"
            {...register("comment", { required: true })}
            placeholder="Descripation"
          />{" "}
          <br />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <Button type="submit" variant="success" className="submit-button">
            Submit
          </Button>
        </form>
              
          </div>
        
      </div>
    </div>
  );
};

export default Review;
