import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import paytm from "../../assets/images/visa.jpg"
import gpay from "../../assets/images/google.svg"
import ppay from "../../assets/images/phonepe-icon.webp"
import applepay from "../../assets/images/applepay1.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/search" className="footer-link">
                                    Search
                                </a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="footer-link">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/refund-policy" className="footer-link">
                                    Refund Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms-of-service" className="footer-link">
                                    Terms & Condition
                                </a>
                            </li>
                            <li>
                                <a href="/shipping-policy" className="footer-link">
                                    Shipping Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled social-icons d-flex gap-3">
                            <li>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5>WhatsApp Us</h5>
                        <p className="whatsapp-info">
                            <FaWhatsapp className="icon" /> +91 7890784390
                        </p>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5>Company Details</h5>
                        <p className="company-info">Furry Frosting</p>
                        <p className="company-info">Delhi/NCR</p>
                    </div>
                </div>

                <div className="row border-top pt-3 align-items-center ">
                    <div className="col-md-12 d-flex justify-content-center mb-1 mt-3">
                        <ul className="list-unstyled d-flex align-items-center gap-4 payment-icons">

                            <li>
                                <img src={ppay} alt="Google Pay" className="payment-icon google-pay" />
                            </li>
                            <li>
                                <img src={gpay} alt="Google Pay" className="payment-icon google-pay " />
                            </li>
                            <li>
                                <img src={paytm} alt="GPayoogle " className="payment-icon google-pay" />
                            </li>
                            <li>
                                <img src={applepay} alt="GPayoogle " className="payment-icon google-pay" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 text">
                        <p className="footer-note mb-0">
                            © {new Date().getFullYear()} Furry Frosting. All Rights Reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
