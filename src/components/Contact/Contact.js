import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container pt-5 mt-5 px-4 px-md-5">
      <div className="row g-5 mb-5">
        <div className="col-md-6 mb-5">
          <h2 className="mb-3 fs-1 hello fw-bold">Get In Touch With Us</h2>
          <p>
            Share some details here. This is a flexible section where you can
            share anything you want. It could be details or some information.
          </p>

          <div className="mb-4">
            <h5 className="hello fw-semibold">Address</h5>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
          <hr style={{ borderColor: "black" }} />
          <div className="mb-3 row">
            <div className="col-md-6">
              <h5 className="hello fw-semibold">Phone</h5>
              <p>(+91) 987 654 321</p>
            </div>
            <div className="col-md-6">
              <h5 className="hello fw-semibold">Email</h5>
              <p>info@contact.com</p>
            </div>
          </div>
          <hr style={{ borderColor: "black" }} />
          <div>
            <h5 className="hello fw-semibold">Social Media</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-5">
          <form>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label fs-5 hello fw-bold">Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="col">
                <label className="form-label fs-5 hello fw-bold">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fs-5 hello fw-bold">
                Phone Number *
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fs-5 hello fw-bold">
                Comment or Message
              </label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
