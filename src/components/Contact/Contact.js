import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Basic form validation
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.phone) formErrors.phone = "Phone number is required.";

    if (Object.keys(formErrors).length === 0) {
      // Submit form if no errors
      console.log("Form submitted", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container pt-5 mt-5 px-4 px-md-5">
      <div className="row g-5 mb-5">
        <div className="col-md-6 mb-5">
          <h2 className="mb-3 fs-1 contact-heading fw-bold">Get In Touch With Us</h2>
          <p>
            Share some details here. This is a flexible section where you can
            share anything you want. It could be details or some information.
          </p>

          <div className="mb-4">
            <h5 className="contact-sub-heading">Address</h5>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
          <hr style={{ borderColor: "black" }} />
          <div className="mb-3 row">
            <div className="col-md-6">
              <h5 className="contact-sub-heading">Phone</h5>
              <p>(+91) 987 654 321</p>
            </div>
            <div className="col-md-6">
              <h5 className="contact-sub-heading">Email</h5>
              <p>info@contact.com</p>
            </div>
          </div>
          <hr style={{ borderColor: "black" }} />
          <div>
            <h5 className="contact-sub-heading">Social Media</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook size={20} color="#1877F2" /> {/* Facebook Blue */}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram size={20} color="#C13584" /> {/* Instagram Purple */}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter size={20} color="#1DA1F2" /> {/* Twitter Blue */}
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaYoutube size={20} color="#FF0000" /> {/* YouTube Red */}
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-5">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label fs-5 custom-form-label">Name <span className="text-danger fs-6">*</span></label>
                <input
                  type="text"
                  className={`form-control custom-input ${errors.name ? "border-danger" : ""}`}
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
              <div className="col">
                <label className="form-label fs-5 custom-form-label">Email <span className="text-danger fs-6">*</span></label>
                <input
                  type="email"
                  className={`form-control custom-input ${errors.email ? "border-danger" : ""}`}
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fs-5 custom-form-label">
                Phone Number <span className="text-danger fs-6">*</span>
              </label>
              <input
                type="text"
                className={`form-control custom-input ${errors.phone ? "border-danger" : ""}`}
                placeholder="Enter Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small className="text-danger">{errors.phone}</small>}
            </div>
            <div className="mb-3">
              <label className="form-label fs-5 custom-form-label " >
                Comment or Message
              </label>
              <textarea
                className="form-control custom-input"
                rows="4"
                placeholder="Enter message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
