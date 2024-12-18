import React from 'react'
import Carousel from '../Carousel/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
import pet1 from '../../assets/images/pet-baker1.jpg'
import './Home.css'
import Testimonial from '../Testimonial/Testimonial';
import ShopRange from '../ShopRange/ShopRange';

const features = [
    {
        id: 1,
        number: "01",
        title: "Order Custom Treats",
        description:
            "Customize cakes, pupcakes, and treats for your furry friend's special occasions. Easy online ordering!",
    },
    {
        id: 2,
        number: "02",
        title: "Free Delivery",
        description:
            "We offer free doorstep delivery to ensure your pet gets fresh, healthy treats. No charges or delays – happiness delivered home."
    },
    {
        id: 3,
        number: "03",
        title: "Freshly Baked",
        description:
            "All our treats are freshly baked using natural, pet-safe ingredients to maintain maximum freshness.",
    },
    {
        id: 4,
        number: "04",
        title: "Secure Payments",
        description:
            "Shop with confidence! We ensure 100% secure payments for a hassle-free, smooth, and reliable shopping experience.",
    },
];



const Home = () => {
    return (
        <>
            <Carousel />

            <div className="container py-5 mt-2">
                <div className="row">
                    {features.map((item) => (
                        <div key={item.id} className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="feature-box">
                                <div className="feature-number">{item.number}</div>
                                <h4 className="feature-title">{item.title}</h4>
                                <p className="feature-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="container my-5">
                <div className="row align-items-center arch">
                    {/* Image Section */}
                    <div className="col-md-6 d-flex justify-content-center gap-4">
                        <div className="arch-image">
                            <img
                                src="https://t4.ftcdn.net/jpg/10/11/77/99/240_F_1011779995_TWEjPxImF1MHVjs2Ac2PupEoXc1godPc.jpg"
                                alt="Flower 1"
                                className="img-fluid"
                            />
                        </div>
                        <div className="arch-image2">
                            <img
                                src="https://t4.ftcdn.net/jpg/09/44/31/81/240_F_944318137_rnXpPZmkiZY03O3e66QJipRxbLQRJLoj.jpg"
                                alt="Flower 2"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="col-md-6 mt-4 mt-md-0 text-md-start text-center">
                        <p className="text-uppercase fw-bold mb-2 about-text">About Pet Bakers</p>
                        <h2 className="display-5 fw-bold text-dark mb-3 about-heading">
                            Baking Delicious Treats for Your Furry Friends
                        </h2>
                        <p className="text-muted mb-4">
                            Welcome to Pet Bakers, where passion for pets meets creativity in the kitchen.
                            We specialize in creating healthy, tasty, and beautifully crafted treats that bring joy to your furry companions.
                            Our mission is to make every special moment with your pets extra memorable and delightful.
                        </p>
                        <a href="#readmore" className="btn btn-sm btn-danger px-4 py-2">
                            Read More
                        </a>
                    </div>

                </div>
            </section>
            <ShopRange />
            <Testimonial />


        </>
    )
}

export default Home