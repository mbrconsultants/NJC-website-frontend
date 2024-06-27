"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
type Inputs = {
  name: string;
  email: string;
  msg: string;
};

const ContactForm4 = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Contact info submitted successfully!");

    // Reset the form to default values
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rv-18-contact_form_input_box">
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          required
          {...register("name")}
        />
        <i className="far fa-user"></i>
      </div>

      <div className="rv-18-contact_form_input_box">
        <input
          type="email"
          className="form-control"
          placeholder="Your Email"
          required
          {...register("email")}
        />
        <i className="far fa-envelope-open"></i>
      </div>

      <textarea
        placeholder="Your Message"
        required
        {...register("msg")}
      ></textarea>

      <div className="rv-18-contact_form_button">
        <button>
          Send Message <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default ContactForm4;
