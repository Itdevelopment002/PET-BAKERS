import React, { useState } from "react";
import "./MiniCake.css";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { Modal } from "react-bootstrap";

const MiniCake = () => {
  const [selectedminicake, setSelectedminicake] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const minicakes = [
    {
      id: 1,
      name: "Paw Shape Cake",
      off: 30,
      originalPrice: 999,
      type: "Chocolate",
      rating: 4.5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Oscar_DOg_Cake.jpg?v=1725601063&width=360",
    },
    {
      id: 2,
      name: "Wagging Tail Cake",
      off: 0,
      originalPrice: 699,
      type: "Strawberry",
      rating: 3.5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/139B515E-370B-4485-B45C-2D93E80D7000.png?v=1730437187&width=360",
    },
    {
      id: 3,
      name: "Pawsome Cake",
      off: 30,
      originalPrice: 999,
      type: "Vanilla",
      rating: 5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Pawsome_Cake.jpg?v=1725600981&width=360",
    },
    {
      id: 4,
      name: "Barklicious Cake",
      off: 0,
      originalPrice: 749,
      type: "Caramel",
      rating: 3.7,
      image:
        "https://thefurrybaker.com/cdn/shop/files/AB65A1D0-550F-42C1-8FD3-EB9A66F29EE4.png?v=1733118383&width=360",
    },
    {
      id: 5,
      name: "Cute Dog Face",
      off: 27,
      originalPrice: 1099,
      type: "Peanut Butter",
      rating: 4,
      image:
        "https://thefurrybaker.com/cdn/shop/files/IMG-6497.png?v=1730003630&width=360",
    },
    {
      id: 6,
      name: "Pink Paw Cake",
      off: 30,
      originalPrice: 999,
      type: "Banana",
      rating: 2.9,
      image:
        "https://thefurrybaker.com/cdn/shop/files/IMG_6468_4f6fd9c2-2019-4fdd-8e93-5a7240eaddd4.jpg?v=1729876934&width=360",
    },
  ];

  const handleView = (minicake) => {
    const price =
      minicake.off > 0
        ? Math.round(
            minicake.originalPrice -
              (minicake.originalPrice * minicake.off) / 100
          )
        : Math.round(minicake.originalPrice);

    setSelectedminicake({ ...minicake, price });
    setShowModal(true);
  };

  const handleAddToCart = (minicake) => {
    alert(`${minicake.name} added to cart!`);
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
    <div className="container minicake-shop-page mt-5">
      <h1 className="shop-title mb-4">Mini cake for Pets</h1>
      <div className="results-info mb-3">
        <p>Showing all {minicakes.length} results</p>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button">
            Default sorting
          </button>
        </div>
      </div>
      <div className="row g-4 mb-5">
        {minicakes.map((minicake) => {
          const price =
            minicake.off > 0
              ? minicake.originalPrice -
                (minicake.originalPrice * minicake.off) / 100
              : minicake.originalPrice;

          return (
            <div key={minicake.id} className="col-md-3 col-sm-6">
              <div className="card product-card">
                <div className="position-relative">
                  <img
                    src={minicake.image}
                    alt={minicake.name}
                    className="card-img-top product-image"
                  />
                  {minicake.off > 0 && (
                    <>
                      <span className="badge badge-sale">Sale!</span>
                      <span className="discount">{minicake.off}% Off</span>{" "}
                    </>
                  )}
                  <div className="action-icons">
                    <div className="tooltip-container">
                      <FaCartPlus
                        className="icon cart-icon"
                        onClick={() => handleAddToCart(minicake)}
                      />
                      <span className="tooltip-text">Add to Cart</span>
                    </div>
                    <div className="tooltip-container">
                      <FaEye
                        className="icon view-icon"
                        onClick={() => handleView(minicake)}
                      />
                      <span className="tooltip-text">View Items</span>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <p className="product-type mb-1">{minicake.type} Flavor</p>
                  <h5 className="product-name">{minicake.name}</h5>
                  <div className="product-price">
                    {minicake.off > 0 ? (
                      <>
                        <span className="original-price text-decoration-line-through">
                          ₹{Math.round(minicake.originalPrice)}.00
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
                    {renderStars(minicake.rating)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedminicake && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedminicake.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedminicake.image}
              alt={selectedminicake.name}
              className="img-fluid mb-3"
            />
            <p>
              <strong>Type:</strong> {selectedminicake.type}
            </p>
            <p>
              <p>
                <strong>Price:</strong> ₹{selectedminicake.price}.00
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

export default MiniCake;
