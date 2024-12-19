import React, { useState } from "react";
import "./PawSnack.css";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { Modal } from "react-bootstrap";

const PawSnack = () => {
  const [selectedPawSnack, setSelectedPawSnack] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const pawSnacks = [
    {
      id: 1,
      name: "Personalized Doggo Face cookies pack",
      off: 0,
      originalPrice: 149,
      type: "Chocolate",
      rating: 4.5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Personalized_Face_Cookies.jpg?v=1725600910&width=360",
    },
    {
      id: 2,
      name: "Bone Shape Cookies",
      off: 0,
      originalPrice: 99,
      type: "Strawberry",
      rating: 3.5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Bone_Shape_Cookie.jpg?v=1725600755&width=360",
    },
    {
      id: 3,
      name: "Puppy Trail Pizza",
      off: 0,
      originalPrice: 320,
      type: "Vanilla",
      rating: 5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Pizza_For_Dogs.jpg?v=1725600946&width=360",
    },
    {
      id: 4,
      name: "Bark Breezer",
      off: 0,
      originalPrice: 149,
      type: "Caramel",
      rating: 3.7,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Bark_Brezer.jpg?v=1725600710&width=360",
    },
    {
      id: 5,
      name: "Personalized Cat Face cookies pack",
      off: 0,
      originalPrice: 149,
      type: "Peanut Butter",
      rating: 4,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Cat_Face_Cookies.jpg?v=1725600796&width=360",
    },
    {
      id: 6,
      name: "Woof You Donuts",
      off: 0,
      originalPrice: 849,
      type: "Banana",
      rating: 2.9,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Woof_Donuts.jpg?v=1725600867&width=360",
    },
  ];

  const handleView = (pawsnack) => {
    const price =
      pawsnack.off > 0
        ? Math.round(
            pawsnack.originalPrice -
              (pawsnack.originalPrice * pawsnack.off) / 100
          )
        : Math.round(pawsnack.originalPrice);

    setSelectedPawSnack({ ...pawsnack, price });
    setShowModal(true);
  };

  const handleAddToCart = (pawsnack) => {
    alert(`${pawsnack.name} added to cart!`);
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
      <h1 className="shop-title mb-4">Treats</h1>
      <div className="results-info mb-3">
        <p>Showing all {pawSnacks.length} results</p>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button">
            Default sorting
          </button>
        </div>
      </div>
      <div className="row g-4 mb-5">
        {pawSnacks.map((pawsnack) => {
          const price =
            pawsnack.off > 0
              ? pawsnack.originalPrice -
                (pawsnack.originalPrice * pawsnack.off) / 100
              : pawsnack.originalPrice;

          return (
            <div key={pawsnack.id} className="col-md-3 col-sm-6">
              <div className="card product-card">
                <div className="position-relative">
                  <img
                    src={pawsnack.image}
                    alt={pawsnack.name}
                    className="card-img-top product-image"
                  />
                  {pawsnack.off > 0 && (
                    <>
                      <span className="badge badge-sale">Sale!</span>
                      <span className="discount">{pawsnack.off}% Off</span>{" "}
                    </>
                  )}
                  <div className="action-icons">
                    <div className="tooltip-container">
                      <FaCartPlus
                        className="icon cart-icon"
                        onClick={() => handleAddToCart(pawsnack)}
                      />
                      <span className="tooltip-text">Add to Cart</span>
                    </div>
                    <div className="tooltip-container">
                      <FaEye
                        className="icon view-icon"
                        onClick={() => handleView(pawsnack)}
                      />
                      <span className="tooltip-text">View Items</span>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <p className="product-type mb-1">{pawsnack.type} Flavor</p>
                  <h5 className="product-name">{pawsnack.name}</h5>
                  <div className="product-price">
                    {pawsnack.off > 0 ? (
                      <>
                        <span className="original-price text-decoration-line-through">
                          ₹{Math.round(pawsnack.originalPrice)}.00
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
                    {renderStars(pawsnack.rating)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedPawSnack && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPawSnack.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedPawSnack.image}
              alt={selectedPawSnack.name}
              className="img-fluid mb-3"
            />
            <p>
              <strong>Type:</strong> {selectedPawSnack.type}
            </p>
            <p>
              <p>
                <strong>Price:</strong> ₹{selectedPawSnack.price}.00
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

export default PawSnack;
