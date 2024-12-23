import React from "react";
import {
  FaPaw,
  FaDog,
  FaCat,
  FaThumbsUp,
  FaThumbsDown,
  FaLock,
  FaShieldAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { GiDogHouse, GiSittingDog, GiCookie } from "react-icons/gi";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="container privacy-wrapper privacy-content">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 mb-5">
        <h1 className="hero-title mb-4">Our Privacy Policy</h1>
        <p className="hero-subtitle fs-5 fw-medium text-muted">
          At <strong>The Furry Frostings</strong>, your privacy and trust are
          our top priorities. We are committed to providing a secure environment
          for your personal information while ensuring a seamless, personalized
          experience.
        </p>
      </section>

      {/* Privacy Overview */}
      <section className="overview partition">
        <h2 className="d-flex align-items-center">
          <FaShieldAlt className="icon me-2" style={{ color: "#00827F" }} /> Why
          Privacy Matters
        </h2>
        <p>
          We believe in the importance of safeguarding your personal
          information. Here at <strong>The Furry Frostings</strong>, we maintain
          strict protocols to ensure that your data remains safe and secure, and
          we take full responsibility for how we handle it.
        </p>
        <ul className="list">
          <li>
            <FaPaw className="list-icon" /> Your data is securely stored and
            protected from unauthorized access.
          </li>
          <li>
            <FaPaw className="list-icon" /> We are committed to complying with
            global data privacy regulations.
          </li>
          <li>
            <FaPaw className="list-icon" /> We provide clear, accessible privacy
            policies for transparency.
          </li>
        </ul>
      </section>

      {/* Information Collection */}
      <section className="info-collection partition">
        <h3 className="d-flex align-items-center">
          <GiDogHouse className="icon me-2" style={{ color: "#00827F" }} />{" "}
          Personal Information We Collect
        </h3>
        <p>
          We collect essential personal information that allows us to offer a
          tailored experience, such as your name, email address, phone number,
          and shipping details.
        </p>
        <ul className="list">
          <li>
            <FaPaw className="list-icon" /> Account creation details for
            personalized recommendations.
          </li>
          <li>
            <FaPaw className="list-icon" /> Shipping and payment information for
            processing orders.
          </li>
          <li>
            <FaPaw className="list-icon" /> Communication preferences to ensure
            we meet your needs.
          </li>
        </ul>
      </section>

      <section className="partition">
        <h3 className="d-flex align-items-center">
          <GiSittingDog className="icon text-success me-2" /> Automatically
          Collected Data
        </h3>
        <p>
          We also collect technical information automatically when you visit our
          website, such as your IP address, browser type, and pages you visit.
          This helps us enhance your browsing experience.
        </p>
        <ul className="list">
          <li>
            <FaPaw className="list-icon" /> User activity and behavioral data to
            personalize your experience.
          </li>
          <li>
            <FaPaw className="list-icon" /> Data to analyze performance and
            optimize our website.
          </li>
        </ul>
      </section>

      {/* Data Usage */}
      <section className="data-usage partition">
        <h3 className="d-flex align-items-center">
          <FaDog className="icon text-warning me-2" /> How We Use Your Data
        </h3>
        <p>
          Your data enables us to improve our services, offer personalized
          suggestions, and provide customer support. Here are the ways we use
          your information:
        </p>
        <ul className="list">
          <li>
            <FaPaw className="list-icon" /> To process your orders and deliver
            the products you love.
          </li>
          <li>
            <FaPaw className="list-icon" /> To offer customer support, answer
            queries, and resolve issues.
          </li>
          <li>
            <FaPaw className="list-icon" /> To inform you about promotions, new
            products, and updates.
          </li>
          <li>
            <FaPaw className="list-icon" /> To analyze and enhance our website’s
            functionality and performance.
          </li>
        </ul>
      </section>

      {/* Your Rights */}
      <section className="your-choices partition">
        <h3 className="d-flex align-items-center">
          <FaThumbsUp className="icon text-info me-2" /> Your Rights and Choices
        </h3>
        <p>
          We respect your rights over your personal data. You have full control
          over your information, and we provide options for managing your data
          preferences:
        </p>
        <ul className="list">
          <li>
            <FaPaw className="list-icon" /> You can access, update, or delete
            your personal data anytime through your account settings.
          </li>
          <li>
            <FaPaw className="list-icon" /> You can opt-out of marketing
            communications at any time by adjusting your preferences.
          </li>
          <li>
            <FaPaw className="list-icon" /> You can request to unsubscribe from
            our mailing lists or push notifications.
          </li>
        </ul>
      </section>

      {/* Security Measures */}
      <section className="security partition">
        <h3 className="d-flex align-items-center">
          <FaLock className="icon me-2" style={{ color: "#3B9C9C" }} /> How We
          Protect Your Data
        </h3>
        <p>
          We employ top-notch security measures, including SSL encryption, to
          protect your personal information. Additionally, we carry out regular
          audits to ensure our systems remain secure.
        </p>
        <ul className="list">
          <li>
            <FaPaw className="list-icon" /> Use of secure sockets layer (SSL)
            encryption technology.
          </li>
          <li>
            <FaPaw className="list-icon" /> Regular monitoring of data security
            vulnerabilities.
          </li>
        </ul>
      </section>

      {/* Cookie Policy */}
      <section className="cookie-policy partition">
        <h3 className="d-flex align-items-center">
          <GiCookie className="icon text-warning me-2" /> Cookie Policy
        </h3>
        <p>
          We use cookies to enhance your experience on our site. These small
          files store preferences and enable features such as remembering your
          login details and optimizing site performance.
        </p>
        <ul className="list">
          <li>
            <FaPaw className="list-icon" /> You can control cookie settings in
            your browser at any time.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact partition">
        <h3 className="d-flex align-items-center">
          <FaInfoCircle className="icon text-info me-2" /> Have Questions? Get
          in Touch!
        </h3>
        <p>
          If you have any concerns or questions about our privacy policy or how
          your data is handled, please don’t hesitate to contact us at{" "}
          <a href="mailto:support@thefurryhaven.com">
            support@thefurryfrostings.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
