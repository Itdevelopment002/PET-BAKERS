import React, { useState, useRef, useEffect } from "react";
import "./MiniCake.css";
import { FaCartPlus, FaEye } from "react-icons/fa";

const MiniCake = () => {
  const [selectedminicake, setSelectedminicake] = useState(null);
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
  const handleThumbnailClick = (image) => {
    setSelectedminicake((prevState) => ({
      ...prevState,
      image, // Update main image when thumbnail is clicked
    }));
  };

  const handleAddToCart = (minicake) => {
    alert(`${minicake.name} added to cart!`);
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
    <div className="container minicake-shop-page mt-5">
      <div className="shop-title-container">
        <div className="line-wrapper">
          <div className="line full-width"></div>
          <div className="line small-width"></div>
        </div>
        <h1 className="shop-title mb-4">MiniCake for Pets</h1>
        <div className="line-wrapper">
          <div className="line full-width"></div>
          <div className="line small-width"></div>
        </div>
      </div>
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

      {selectedminicake && showModal && (
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
                      src={selectedminicake.image}
                      alt={selectedminicake.name}
                      className="img-fluid rounded"
                      style={{ width: '350px', height: '350px' }}
                    />

                    {/* Thumbnail Gallery */}
                    <div className="d-flex justify-content-center mt-3">
                      {selectedminicake.thumbnailImages.map((thumb, index) => (
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
                    <h4 className="fw-bold mt-1 custom-modal-header">{selectedminicake.name}</h4>
                    {/* <h5 className="text-danger fw-bold">₹{selectedminicake.price.toFixed(2)}</h5> */}
                    <div className="product-price mb-2">
                      <span className="original-price fw-bold ">₹{selectedminicake.originalPrice.toFixed(2)}</span>
                      <span className="sale-price ms-2 fw-bold ">₹{selectedminicake.price.toFixed(2)}</span>

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

export default MiniCake;
