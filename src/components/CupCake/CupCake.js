import React, { useState } from 'react';
import './CupCake.css';
import { FaCartPlus, FaEye } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

const CupCake = () => {
  const [selectedCupcake, setSelectedCupcake] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cupcakes = [
    {
      id: 1,
      name: 'Pawfect Chocolate Cupcake',
      price: 300,
      originalPrice: 500,
      type: 'Chocolate',
      image: 'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
    },
    {
      id: 2,
      name: 'Puppy Love Strawberry Cupcake',
      price: 400,
      originalPrice: 550,
      type: 'Strawberry',
      image: 'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
    },
    {
      id: 3,
      name: 'Bark Berry Vanilla Cupcake',
      price: 300,
      originalPrice: 450,
      type: 'Vanilla',
      image: 'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
    },
    {
      id: 4,
      name: 'Golden Retriever Caramel Cupcake',
      price: 420,
      originalPrice: 600,
      type: 'Caramel',
      image: 'https://thefurrybaker.com/cdn/shop/files/Cucakes_ShihTzu.jpg?v=1725600670&width=360',
    },
    {
      id: 5,
      name: 'Furry Peanut Butter Cupcake',
      price: 380,
      originalPrice: 500,
      type: 'Peanut Butter',
      image: 'https://thefurrybaker.com/cdn/shop/files/Taco_Cupcake.jpg?v=1725600544&width=360',
    },
    {
      id: 6,
      name: 'Tail-Wagging Banana Cupcake',
      price: 390,
      originalPrice: 480,
      type: 'Banana',
      image: 'https://thefurrybaker.com/cdn/shop/files/Bella_Coco_Cupcake.jpg?v=1725600510&width=360',
    },
  ];

  const handleView = (cupcake) => {
    setSelectedCupcake(cupcake);
    setShowModal(true);
  };

  const handleAddToCart = (cupcake) => {
    alert(`${cupcake.name} added to cart!`);
  };

  return (
    <div className="container cupcake-shop-page mt-5">
      <h1 className="shop-title mb-4">Cupcake Shop for Pets</h1>
      <div className="results-info mb-3">
        <p>Showing all {cupcakes.length} results</p>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button">
            Default sorting
          </button>
        </div>
      </div>
      <div className="row g-4 mb-5">
        {cupcakes.map((cupcake) => (
          <div key={cupcake.id} className="col-md-3 col-sm-6">
            <div className="card product-card">
              <div className="position-relative">
                <img
                  src={cupcake.image}
                  alt={cupcake.name}
                  className="card-img-top product-image"
                />
                <span className="badge badge-sale">Sale!</span>
                <div className="action-icons">
                  <div className="tooltip-container">
                    <FaCartPlus
                      className="icon cart-icon"
                      onClick={() => handleAddToCart(cupcake)}
                    />
                    <span className="tooltip-text">Add to Cart</span>
                  </div>
                  <div className="tooltip-container">
                    <FaEye
                      className="icon view-icon"
                      onClick={() => handleView(cupcake)}
                    />
                    <span className="tooltip-text">View Items</span>
                  </div>
                </div>
              </div>
              <div className="card-body text-center">
                <p className="product-type mb-1">{cupcake.type} Flavor</p>
                <h5 className="product-name">{cupcake.name}</h5>
                <div className="product-price">
                  <span className="original-price">₹{cupcake.originalPrice.toFixed(2)}</span>
                  <span className="sale-price ms-2">₹{cupcake.price.toFixed(2)}</span>

                </div>
                <div className="rating mt-2">★★★★☆</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCupcake && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCupcake.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedCupcake.image}
              alt={selectedCupcake.name}
              className="img-fluid mb-3"
            />
            <p>
              <strong>Type:</strong> {selectedCupcake.type}
            </p>
            <p>
              <strong>Price:</strong> ${selectedCupcake.price.toFixed(2)}
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

export default CupCake;
