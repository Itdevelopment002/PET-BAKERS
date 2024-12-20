import React, { useState, useEffect, useRef } from "react";
import "./Cake.css";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { Modal } from "react-bootstrap";

const Cake = () => {
  const [selectedCake, setSelectedCake] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavour, setSelectedFlavour] = useState(""); // Flavour state
  const [selectedSize, setSelectedSize] = useState(null);
  const modalRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showModal]);


  const cakes = [
    {
      id: 1,
      name: "Pawsome Cake",
      off: 30,
      originalPrice: 899,
      type: "Chocolate",
      rating: 4.5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Pawshape_Cake.jpg?v=1725600469&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
    },
    {
      id: 3,
      name: "Pawmazing Cake",
      off: 60,
      originalPrice: 1350,
      type: "Vanilla",
      rating: 5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/IMG_6641.jpg?v=1730656458&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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

  const handleThumbnailClick = (image) => {
    setSelectedCake((prevState) => ({
      ...prevState,
      image, // Update main image when thumbnail is clicked
    }));
  };

  const handleAddToCart = (cake) => {
    alert(`${cake.name} added to cart!`);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
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
      <div className="shop-title-container">
        <div className="line-wrapper">
          <div className="line full-width"></div>
          <div className="line small-width"></div>
        </div>
        <h1 className="shop-title mb-4">Cake for Pets</h1>
        <div className="line-wrapper">
          <div className="line full-width"></div>
          <div className="line small-width"></div>
        </div>
      </div>      <div className="results-info mb-3">
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

      {selectedCake && showModal && (
        <div
          className="modal fade show d-block modal-fade-in"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div className="modal-dialog modal-lg" ref={modalRef}>
            <div className="modal-content">
              {/* Close Button */}
              <button
                type="button"
                className="btn-close btn-sm position-absolute top-0 end-0 m-3"
                style={{
                  zIndex: 1050,
                  outline: 'none',
                  boxShadow: 'none',
                  transform: 'scale(0.8)',
                }}
                onClick={() => setShowModal(false)}
              ></button>



              <div className="modal-body modal-body-color">
                <div className="row custom-open-modal">
                  {/* Left Section: Image */}
                  <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={selectedCake.image}
                      alt={selectedCake.name}
                      className="img-fluid rounded"
                      style={{ width: '350px', height: '350px' }}
                    />

                    {/* Thumbnail Gallery */}
                    <div className="d-flex justify-content-center mt-3">
                      {selectedCake.thumbnailImages.map((thumb, index) => (
                        <img
                          key={index}
                          src={thumb}
                          alt={`Thumbnail ${index + 1}`}
                          className="img-thumbnail me-2"
                          style={{ width: '60px', height: '60px', cursor: 'pointer' }}
                          onClick={() => handleThumbnailClick(thumb)} // Update the main image when clicked
                        />
                      ))}
                    </div>
                  </div>


                  {/* Right Section: Details */}
                  <div className="col-md-6 py-4 px-3">
                    <h4 className="fw-bold mt-3 custom-modal-site fs-6 text-muted">Pet Bakers</h4>
                    <h4 className="fw-bold mt-1 custom-modal-header">{selectedCake.name}</h4>
                    {/* <h5 className="text-danger fw-bold">₹{selectedCake.price.toFixed(2)}</h5> */}
                    <div className="product-price mb-2">
                      <span className="original-price fw-bold ">₹{selectedCake.originalPrice.toFixed(2)}</span>
                      <span className="sale-price ms-2 fw-bold ">₹{selectedCake.price.toFixed(2)}</span>

                    </div>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s.
                    </p>



                    {/* Size Selection */}
                    <div className="mb-3 size-selection">
                      <label className="form-label fw-bold text-muted">Size</label>
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <input
                          type="radio"
                          name="size"
                          id="sizePack4"
                          className="btn-check"
                          autoComplete="off"
                          checked={selectedSize === 'Pack of 4'}
                          onChange={() => handleSizeChange('Pack of 4')}
                        />
                        <label
                          htmlFor="sizePack4"
                          className={`btn ${selectedSize === 'Pack of 4' ? 'btn-dark' : 'btn-outline-dark'}`}
                          style={{
                            borderRadius: '30px',
                            padding: '0.2rem 1.3rem',
                            fontSize: '13px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                          }}
                        >
                          Pack of 4
                        </label>

                        <input
                          type="radio"
                          name="size"
                          id="sizePack6"
                          className="btn-check"
                          autoComplete="off"
                          checked={selectedSize === 'Pack of 6'}
                          onChange={() => handleSizeChange('Pack of 6')}
                        />
                        <label
                          htmlFor="sizePack6"
                          className={`btn ${selectedSize === 'Pack of 6' ? 'btn-dark' : 'btn-outline-dark'}`}
                          style={{
                            borderRadius: '30px',
                            padding: '0.2rem 1.3rem',
                            fontSize: '13px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                          }}
                        >
                          Pack of 6
                        </label>
                      </div>
                    </div>

                    <div className="mb-3 flavour-selection">
                      <label className="form-label fw-bold mb-2 text-muted">Flavour Selection</label>
                      <div className="position-relative custom-dropdown-margin">
                        <select
                          className="form-select custom-dropdown"
                          onChange={(e) => setSelectedFlavour(e.target.value)}
                          value={selectedFlavour}
                        >
                          <option value="">Select a Flavour</option>
                          <option value="Vanilla">Vanilla</option>
                          <option value="Chocolate">Chocolate</option>
                          <option value="Strawberry">Strawberry</option>
                          <option value="Red Velvet">Red Velvet</option>
                          <option value="Lemon">Lemon</option>
                        </select>
                      </div>
                    </div>

                    {/* Quantity Selection */}
                    <div className="mb-3 Quantity-selection">
                      <label className="form-label fw-bold mb-2 text-muted">Quantity</label>
                      <div className="row g-2 align-items-center">
                        {/* Input Group Column */}
                        <div className="col-12 col-md-5">
                          <div className="input-group">
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              type="button"
                              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="form-control text-center"
                              value={quantity}
                              onChange={(e) => setQuantity(Number(e.target.value))}
                              min="1"
                            />
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              type="button"
                              onClick={() => setQuantity((prev) => prev + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Add to Cart Button Column */}
                        <div className="col-12 col-md-6">
                          <button
                            className="btn btn-sm add-cart-button w-100 py-2 rounded-3"
                            onClick={handleAddToCart}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Flavour selection */}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer d-flex flex-column align-items-center">
                <div className="d-flex flex-row justify-content-center gap-4 align-items-center">
                  {/* Share Text */}
                  <span className='share-text'>Share:</span>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/sharer/sharer.php?u=YOUR_MODAL_CONTENT_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center d-flex align-items-center"
                    style={{ color: '#1877F2', textDecoration: 'none' }}
                  >
                    <i className="fab fa-facebook fa-1x"></i>
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://twitter.com/intent/tweet?url=YOUR_MODAL_CONTENT_URL&text=Check%20this%20out!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center d-flex align-items-center"
                    style={{ color: '#1DA1F2', textDecoration: 'none' }}
                  >
                    <i className="fab fa-twitter fa-1x"></i>
                  </a>
                  {/* Pinterest */}
                  <a
                    href="https://pinterest.com/pin/create/button/?url=YOUR_MODAL_CONTENT_URL&media=YOUR_IMAGE_URL&description=YOUR_DESCRIPTION"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center d-flex align-items-center"
                    style={{ color: '#E60023', textDecoration: 'none' }}
                  >
                    <i className="fab fa-pinterest fa-1x"></i>
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://api.whatsapp.com/send?text=Check%20this%20out:%20YOUR_MODAL_CONTENT_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center d-flex align-items-center"
                    style={{ color: '#25D366', textDecoration: 'none' }}
                  >
                    <i className="fab fa-whatsapp fa-1x"></i>
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cake;
