import React, { useState } from "react";
import "./Cake.css";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { Modal } from "react-bootstrap";

const Cake = () => {
  const [selectedCake, setSelectedCake] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cakes = [
    {
      id: 1,
      name: "Pawsome Cake",
      off: 0,
      originalPrice: 899,
      type: "Chocolate",
      rating: 4.5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Pawshape_Cake.jpg?v=1725600469&width=360",
    },
    {
      id: 2,
      name: "Black Doggo Cake",
      off: 0,
      originalPrice: 999,
      type: "Strawberry",
      rating: 3.5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/A5F3C249-EE63-48E9-83AF-8C8D51E7C78E.png?v=1733116406&width=360",
    },
    {
      id: 3,
      name: "Pawmazing Cake",
      off: 0,
      originalPrice: 1350,
      type: "Vanilla",
      rating: 5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/IMG_6641.jpg?v=1730656458&width=360",
    },
    {
      id: 4,
      name: "Bone Cake",
      off: 0,
      originalPrice: 1150,
      type: "Caramel",
      rating: 3.7,
      image:
        "https://thefurrybaker.com/cdn/shop/files/21351B11-EC82-4E99-9452-513AD304297E.jpg?v=1731335397&width=360",
    },
    {
      id: 5,
      name: "Pink Paw Cake",
      off: 30,
      originalPrice: 999,
      type: "Peanut Butter",
      rating: 4,
      image:
        "https://thefurrybaker.com/cdn/shop/files/IMG_6468_4f6fd9c2-2019-4fdd-8e93-5a7240eaddd4.jpg?v=1729876934&width=360",
    },
    {
      id: 6,
      name: "Shih Tzu Face Dog Cake",
      off: 0,
      originalPrice: 1250,
      type: "Banana",
      rating: 2.9,
      image:
        "https://thefurrybaker.com/cdn/shop/files/IMG_4669.jpg?v=1725606798&width=360",
    },
  ];

  const handleView = (cake) => {
    const price =
      cake.off > 0
        ? Math.round(
            cake.originalPrice -
              (cake.originalPrice * cake.off) / 100
          )
        : Math.round(cake.originalPrice);

    setSelectedCake({ ...cake, price });
    setShowModal(true);
  };

  const handleAddToCart = (cake) => {
    alert(`${cake.name} added to cart!`);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 >= 0.5; // Half star check
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star full">
          ★
        </span>
      );
    }

    // Add half star
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="container cake-shop-page mt-5">
      <h1 className="shop-title mb-4">Cake for Pets</h1>
      <div className="results-info mb-3">
        <p>Showing all {cakes.length} results</p>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button">
            Default sorting
          </button>
        </div>
      </div>
      <div className="row g-4 mb-5">
        {cakes.map((cake) => {
          const price =
            cake.off > 0
              ? cake.originalPrice -
                (cake.originalPrice * cake.off) / 100
              : cake.originalPrice;

          return (
            <div key={cake.id} className="col-md-3 col-sm-6">
              <div className="card product-card">
                <div className="position-relative">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="card-img-top product-image"
                  />
                  {cake.off > 0 && (
                    <>
                      <span className="badge badge-sale">Sale!</span>
                      <span className="discount">{cake.off}% Off</span>{" "}
                    </>
                  )}
                  <div className="action-icons">
                    <div className="tooltip-container">
                      <FaCartPlus
                        className="icon cart-icon"
                        onClick={() => handleAddToCart(cake)}
                      />
                      <span className="tooltip-text">Add to Cart</span>
                    </div>
                    <div className="tooltip-container">
                      <FaEye
                        className="icon view-icon"
                        onClick={() => handleView(cake)}
                      />
                      <span className="tooltip-text">View Items</span>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <p className="product-type mb-1">{cake.type} Flavor</p>
                  <h5 className="product-name">{cake.name}</h5>
                  <div className="product-price">
                    {cake.off > 0 ? (
                      <>
                        <span className="original-price text-decoration-line-through">
                          ₹{Math.round(cake.originalPrice)}.00
                        </span>
                        <span className="sale-price ms-2">
                          ₹{Math.round(price)}.00
                        </span>
                      </>
                    ) : (
                      <span className="sale-price ms-2">
                        ₹{Math.round(price)}.00
                      </span>
                    )}
                  </div>
                  <div className="rating mt-2">
                    {renderStars(cake.rating)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedCake && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCake.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedCake.image}
              alt={selectedCake.name}
              className="img-fluid mb-3"
            />
            <p>
              <strong>Type:</strong> {selectedCake.type}
            </p>
            <p>
              <p>
                <strong>Price:</strong> ₹{selectedCake.price}.00
              </p>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Cake;
