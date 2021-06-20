import React, {  useEffect, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import Sidebar from "../../Sidebar/Sidebar";
import "./AddServices.css";
import { useForm } from "react-hook-form";
import axios from "axios";


const AddServices = () => {
  const [imgURL, setImgURL] = useState(null);

  const [imgUploadedNotification, setImgUploadedNotification] = useState(false);
  const [response, setResponse] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hendelImageUploaded = (e) => {
    const imageData = new FormData();
    imageData.set("key", "4850594385c2168e5de04af7b936cba0");
    imageData.append("image", e.target.files[0]);
    console.log(e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setImgURL(response.data.data.display_url);

        setImgUploadedNotification(true);
      })
      .catch((error) => {
        console.log("img error", error);
      });
  };
  const onSubmit = (data) => {
    const servicesInfo = {
      name: data.taitle,
      price: data.price,
      description: data.description,
      img: imgURL,
    };
    console.log(servicesInfo);

    fetch("https://arcane-refuge-91321.herokuapp.com/addServices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(servicesInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setResponse(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setInterval(() => {
      setImgUploadedNotification(false);
      setResponse(false);
    }, 8000);
  }, [setImgUploadedNotification, setResponse]);

  return (
    <div>
      <Sidebar />
      <div class="content">
        <div className="order-list">
        <div className="row">
          <div className="col-12 d-flex ">
            <div className="makeAdminHeader">
              <h1>Add Product </h1>
            </div>
            <div className="makeAdminHeader">
              {/* <h4 className="text-right">{loggedInUser?.name && loggedInUser.name} </h4> */}
            </div>
          </div>

          <div className="col-12 mt-5 pt-5">
            {response && (
              <h5 className="text-success">Service added successfully </h5>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="d-flex row">
              <div className="name-price col-md-4">
                <h6>Service Taitle</h6>
                <input
                  type="text"
                  className="form-control"
                  name="taitle"
                  {...register("taitle", { required: true })}
                  placeholder="Taitle"
                />
                {errors.taitle && (
                  <span className="text-danger">Field is required</span>
                )}
                <h6>Service Description</h6>
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  {...register("description", {
                    required: "Field is required",
                    minLength: {
                      value: 80,
                      message: "Minimum Length  40 character",
                    },
                    maxLength: {
                      value: 120,
                      message: "Max-Length 130 character",
                    },
                  })}
                  placeholder="Description"
                ></textarea>
                {errors.description && (
                  <span className="text-danger">
                    {errors.description.message}
                  </span>
                )}
              </div>
              <div className="weight-UPimg col-md-4">
                <h6>Price</h6>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  {...register("price", { required: true })}
                  placeholder="Price"
                />
                {errors.price && (
                  <span className="text-danger">Price is required</span>
                )}

                <h6>choose a photo</h6>

                <input
                  onChange={hendelImageUploaded}
                  name="image"
                  id="file"
                  type="file"
                  accept="image/*"
                />

                <label htmlFor="file">
                  <BsCloudUpload /> Upload Photo
                </label>
                {imgUploadedNotification && (
                  <span className="text-success">
                    image successfully uploaded
                  </span>
                )}
              </div>
              <div className="col-md-5">
                <input
                  className="addservicesBtn"
                  type="submit"
                  value="Add Services"
                />
              </div>
            </form>
          </div>
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default AddServices;
