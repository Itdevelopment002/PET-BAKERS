import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from '../../assets/images/slider/slider1.webp';
import slider2 from '../../assets/images/slider/slider2.webp';
import slider3 from '../../assets/images/slider/slider3.webp';
import slider4 from '../../assets/images/slider/slider4.webp';

import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="slider-menu">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="overlay"></div>
            <img
              src={slider1}
              className="d-block w-100"
              alt="Healthy Treats"
            />
            <div className="carousel-caption text-start">
              <h2>Delicious & Healthy Treats</h2>
              <p>Homemade, nutritious treats for your furry friends.</p>
              <button className="btn btn-light">Shop Treats</button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="overlay"></div>
            <img
              src={slider2}
              className="d-block w-100"
              alt="Pet Birthday Cakes"
            />
            <div className="carousel-caption text-end">
              <h2>Custom Pet Birthday Cakes</h2>
              <p>Celebrate your pet's special day with a tasty cake!</p>
              <button className="btn btn-light">Order a Cake</button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="overlay"></div>
            <img
              src={slider3}
              className="d-block w-100"
              alt="Natural Ingredients"
            />
            <div className="carousel-caption text-start">
              <h2>Made with Natural Ingredients</h2>
              <p>We use only the freshest, pet-safe ingredients.</p>
              <button className="btn btn-light">Learn More</button>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item">
            <div className="overlay"></div>
            <img
              src={slider4}
              className="d-block w-100"
              alt="Paw-Licious Cookies"
            />
            <div className="carousel-caption text-end">
              <h2>Paw-Licious Cookies & Snacks</h2>
              <p>Treat your pet with our irresistible baked goodies.</p>
              <button className="btn btn-light">Explore Collection</button>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
