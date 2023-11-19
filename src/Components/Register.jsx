import React from "react";
import "../Styles/Register.css";
import reg_img from "../assets/Register-m.jpg";
import { useState } from 'react';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const initialFormData={
    username: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const resetForm = () => {
    setFormData(initialFormData);
  };


  const [alertMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      // console.log(formDataToSend)
      const response = await fetch(

        // This File URL Path is my localhost
        // Attached for grs_web/src/crud_opration/register.php
        "http://localhost:8080/crud_opration/register.php",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {

          // Data saved successfully
          toast.success("Data saved successfully!");
          resetForm();
          // You can also redirect the user to another page if needed
        } else if (data.msg) {
          // User already exists, display the server-provided message
          // setAlertMessage(data.msg);
          toast.error(data.msg);
        } else {
          // Handle other error scenarios
          toast.error("An error occurred. Please try again.");

          // setAlertMessage("An error occurred. Please try again.");
        }
      } else {
        // Error saving data
        toast.error("Error saving data. Please try again.");

        // setAlertMessage("Error saving data. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    
  };

  return (
    <div id="register" className="container mt-5">
      {/* --------------Animated Slide Button-----------------------------------  */}
  <ToastContainer />
      <button data-text="Awesome" className="button mt-5  ">
        <span className="actual-text text-black">&nbsp;REGISTER&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
          &nbsp;REGISTER&nbsp;
        </span>
      </button>
      <hr />

      <div className="row d-flex flex-wrap justify-content-center">
        <div className="col-md-6">
          <img
            className="img-fluid"
            style={{ marginTop: "8rem" }}
            src={reg_img}
            alt=""
          />
        </div>

        <div className="col-md-6 ">
          {alertMessage && <div className="alert">{alertMessage}</div>}
          
          <form className="form" id="reg_form"  onSubmit={handleFormSubmit}>
            <p>Register Here</p>
            <div className="group">
              <input 
                required="true"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                className="main-input" 
                type="text" 
               />
              <span className="highlight-span"></span>
              <label className="lebal-email">NAME</label>
            </div>
            <div className="container-1">
              <div className="group">
                <input 
                    required="true"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange} 
                    className="main-input"
                    type="email" />
                <span className="highlight-span"></span>
                <label className="lebal-email">EMAIL</label>
              </div>
            </div>
            <div className="container-1">
              <div className="group">
                <select     
                    required="true" 
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="main-input bg-black ">
                  <option value=""></option>
                  <option value="Customer_Services">General Customer Services</option>
                  <option value="Suggestion">Suggestion</option>
                  <option value="Product_Support">Product Support</option>
                  <option value="Careers">Careers</option>
                  <option value="Others">Others</option>
                </select>
                <span className="highlight-span"></span>
                <label className="lebal-email">SUBJECT</label>
              </div>
            </div>
            <div className="container-1">
              <div className="group">
                <textarea
                  required="true"
                  className="main-input"
                  rows="4"
                  name="message"
                  id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                ></textarea>
                <span className="highlight-span"></span>
                <label className="lebal-email">MESSAGE</label>
              </div>
            </div>
            
            <button className="sub_btn mt-4" style={{ marginBottom: "3rem" }}>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Register;
