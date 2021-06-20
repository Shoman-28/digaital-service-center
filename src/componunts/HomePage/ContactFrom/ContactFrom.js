import { Button } from 'react-bootstrap';
import React from 'react';
import { useForm } from "react-hook-form";
import './ContactFrom.css'

const ContactFrom = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="text-center pb-5 pt-4 from-bg">
            <h2 className="mb-5 pb-4 pt-3">Get in Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <input name="name" className="name" {...register("name", { required: true })} placeholder="Your Name" /> <br/>
                <input name="email" className="email" {...register("email", { required: true })} placeholder="Your Email"/> <br/>
                <textarea  name="message" className="massage"{...register("message", { required: true })} placeholder="Your Message"/> <br/><br/>           
                {errors.exampleRequired && <span>This field is required</span>}           
                <Button type="submit" variant="success" className="submit-button">Send Message</Button>
            </form>
        </div>
       
    );
};

export default ContactFrom;