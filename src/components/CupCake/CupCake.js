import React, { useState, useEffect, useRef } from "react";
import "./CupCake.css";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CupCake = () => {
  const [selectedCupcake, setSelectedCupcake] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavour, setSelectedFlavour] = useState(""); // Flavour state
  const [selectedSize, setSelectedSize] = useState(null);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);


  const [cupcakes, setCupcakes] = useState([
    {
      id: 1,
      name: "Pawfect Chocolate Cupcake",
      off: 50,
      originalPrice: 500,
      type: "Chocolate",
      rating: 3.5,
      available: true,
      size: "Small",
      image:
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
      thumbnailImages: [
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
      ],
    },
    {
      id: 2,
      name: "Puppy Love Strawberry Cupcake",
      off: 100,
      originalPrice: 550,
      type: "Strawberry",
      rating: 3.5,
      available: false,
      size: "Medium",
      image:
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
      thumbnailImages: [
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
      ],
    },
    {
      id: 3,
      name: "Bark Berry Vanilla Cupcake",
      off: 80,
      originalPrice: 450,
      type: "Vanilla",
      rating: 5,
      available: true,
      size: "Large",
      image:
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
      thumbnailImages: [
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
      ],
    },
    {
      id: 4,
      name: "Golden Retriever Caramel Cupcake",
      off: 20,
      originalPrice: 600,
      type: "Caramel",
      rating: 4.5,
      available: true,
      size: "Large",
      image:
        "https://thefurrybaker.com/cdn/shop/files/Cucakes_ShihTzu.jpg?v=1725600670&width=360",
      thumbnailImages: [
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
      ],
    },
    {
      id: 5,
      name: "Furry Peanut Butter Cupcake",
      off: 0,
      originalPrice: 500,
      type: "Peanut Butter",
      rating: 5,
      available: true,
      size: "small",
      image:
        "https://thefurrybaker.com/cdn/shop/files/Taco_Cupcake.jpg?v=1725600544&width=360",
      thumbnailImages: [
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
      ],
    },
    {
      id: 6,
      name: "Tail-Wagging Banana Cupcake",
      off: 30,
      originalPrice: 480,
      type: "Banana",
      rating: 4.5,
      available: false,
      size: "Medium",
      image:
        "https://thefurrybaker.com/cdn/shop/files/Bella_Coco_Cupcake.jpg?v=1725600510&width=360",
      thumbnailImages: [
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
      ],
    },
  ]);

  const handleView = (cupcake) => {
    const price =
      cupcake.off > 0
        ? Math.round(
          cupcake.originalPrice - (cupcake.originalPrice * cupcake.off) / 100
        )
        : Math.round(cupcake.originalPrice);
    setSelectedCupcake({ ...cupcake, price });
    setShowModal(true);
  };
  const handleThumbnailClick = (image) => {
    setSelectedCupcake((prevState) => ({
      ...prevState,
      image, // Update main image when thumbnail is clicked
    }));
  };

  const handleCardClick = (id) => {
    navigate(`/cupcake/${id}`);
  };

  const handleAddToCart = (cupcake) => {
    alert(`${cupcake.name} added to cart!`);
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

  const [filteredCakes, setFilteredCakes] = useState(cupcakes);
  const [filters, setFilters] = useState({
    flavor: "",
    priceRange: [0, 1000],
    rating: 0,
    availability: "",
    size: "",
  });



  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  useEffect(() => {
    let cakes = cupcakes;

    // Filter by flavor
    if (filters.flavor) cakes = cakes.filter((cake) => cake.type === filters.flavor);

    // Filter by price range
    if (filters.priceRange)
      cakes = cakes.filter(
        (cake) => cake.originalPrice >= filters.priceRange[0] && cake.originalPrice <= filters.priceRange[1]
      );

    // Filter by rating
    if (filters.rating) cakes = cakes.filter((cake) => cake.rating >= filters.rating);

    // Filter by availability
    if (filters.availability)
      cakes = cakes.filter((cake) => cake.available === (filters.availability === "Available"));

    // Filter by size
    if (filters.size) cakes = cakes.filter((cake) => cake.size === filters.size);

    // Filter by discount (percentage off)
    if (filters.discountRange) {
      // Check if the discount range is set to show all offers (0-100%)
      if (filters.discountRange[0] === 0 && filters.discountRange[1] === 100) {
        // Allow all cakes, including those with 0% off
        cakes = cakes.filter((cake) => cake.off >= 0);
      } else {
        // Filter by specific discount range
        cakes = cakes.filter(
          (cake) => cake.off >= filters.discountRange[0] && cake.off <= filters.discountRange[1]
        );
      }
    }

    // Set the filtered cakes
    setFilteredCakes(cakes);
  }, [filters, cupcakes]);

  return (
    <div className="container cupcake-shop-page mt-5 mb-4">
      <div className="row">
        {/* Filter Sidebar */}
        <div className="col-md-3 col-12 filter-section">
          <h4>Filters</h4>
          <div className="filter-group">
            <label>Flavour</label>
            <select
              className="form-select"
              onChange={(e) => handleFilterChange("flavor", e.target.value)}
            >
              <option value="">All</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Strawberry">Strawberry</option>
              <option value="Vanilla">Vanilla</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="1000"
              step="50"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange("priceRange", [0, parseInt(e.target.value)])}
            />
            <p>Up to ₹{filters.priceRange[1]}</p>
          </div>

          <div className="filter-group rating-filter">
            <label>Rating</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${filters.rating >= star ? "active" : ""}`}
                  onClick={() => handleFilterChange("rating", star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="selected-rating">
              {filters.rating ? `${filters.rating} & above` : "All ratings"}
            </p>
          </div>



          <div className="filter-group">
            <label>Offers</label>
            <div className="offer-options">
              <label className="custom-radio">
                <input
                  type="radio"
                  name="offer"
                  value="0"
                  onChange={(e) => handleFilterChange("discountRange", [0, 100])}  // No filter, all offers
                />
                <span>All Offers</span>
              </label>
              <label className="custom-radio">
                <input
                  type="radio"
                  name="offer"
                  value="20"
                  onChange={(e) => handleFilterChange("discountRange", [1, 20])}  // Up to 20% Off
                />
                <span>Upto 20% Off</span>
              </label>
              <label className="custom-radio">
                <input
                  type="radio"
                  name="offer"
                  value="40"
                  onChange={(e) => handleFilterChange("discountRange", [1, 40])}  // Up to 40% Off
                />
                <span>Upto 40% Off</span>
              </label>
              <label className="custom-radio">
                <input
                  type="radio"
                  name="offer"
                  value="60"
                  onChange={(e) => handleFilterChange("discountRange", [1, 60])}  // Up to 60% Off
                />
                <span>Upto 60% Off</span>
              </label>
            </div>
          </div>




          <div className="filter-group">
            <label>Size</label>
            <div className="size-options">
              <label className="custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  value="Small"
                  onChange={(e) => handleFilterChange("size", e.target.value, e.target.checked)}
                />
                <span>Small</span>
              </label>

              <label className="custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  value="Medium"
                  onChange={(e) => handleFilterChange("size", e.target.value, e.target.checked)}
                />
                <span>Medium</span>
              </label>
              <label className="custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  value="Large"
                  onChange={(e) => handleFilterChange("size", e.target.value, e.target.checked)}
                />
                <span>Large</span>
              </label>
            </div>
          </div>


        </div>
        <div className="col-md-9 col-12">

          <div className="shop-title-container mb-2">
            <div className="line-wrapper">
              <div className="line full-width"></div>
              <div className="line small-width"></div>
            </div>
            <h1 className="shop-title mb-4">Cupcake for Pets</h1>
            <div className="line-wrapper">
              <div className="line full-width"></div>
              <div className="line small-width"></div>
            </div>
          </div>
          <div className="results-info mb-3">
            <p>Showing all {cupcakes.length} results</p>
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle" type="button">
                Default sorting
              </button>
            </div>
          </div>
          <div className="row">
            {filteredCakes.map((cupcake) => {
              const price =
                cupcake.off > 0
                  ? cupcake.originalPrice -
                  (cupcake.originalPrice * cupcake.off) / 100
                  : cupcake.originalPrice;

              return (
                <div
                  key={cupcake.id}
                  className=" col-lg-4 col-md-6 col-sm-6 col-12 mb-4 "
                >
                  <div
                    className="card product-card"
                    onClick={() => handleCardClick(cupcake.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="position-relative">
                      <img
                        src={cupcake.image}
                        alt={cupcake.name}
                        className="card-img-top product-image"
                      />
                      {cupcake.off > 0 && (
                        <>
                          <span className="badge badge-sale">Sale!</span>
                          <span className="discount">{cupcake.off}% Off</span>{" "}
                        </>
                      )}
                      <div className="action-icons">
                        <div className="tooltip-container">
                          <FaCartPlus
                            className="icon cart-icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(cupcake)
                            }}
                          />
                          <span className="tooltip-text">Add to Cart</span>
                        </div>
                        <div className="tooltip-container">
                          <FaEye
                            className="icon view-icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleView(cupcake)
                            }}
                          />
                          <span className="tooltip-text">View Items</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <p className="product-type mb-1">{cupcake.type} Flavor</p>
                      <h5 className="product-name">{cupcake.name}</h5>
                      <div className="product-price">
                        {cupcake.off > 0 ? (
                          <>
                            <span className="original-price text-decoration-line-through">
                              ₹{Math.round(cupcake.originalPrice)}.00
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
                        {renderStars(cupcake.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedCupcake && showModal && (
        <div
          className="modal fade show d-block modal-fade-in"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="modal-dialog modal-lg" ref={modalRef}>
            <div className="modal-content">
              {/* Close Button */}
              <button
                type="button"
                className="btn-close btn-sm position-absolute top-0 end-0 m-3"
                style={{
                  zIndex: 1050,
                  outline: "none",
                  boxShadow: "none",
                  transform: "scale(0.8)",
                }}
                onClick={() => setShowModal(false)}
              ></button>

              <div className="modal-body modal-body-color">
                <div className="row custom-open-modal">
                  {/* Left Section: Image */}
                  <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={selectedCupcake.image}
                      alt={selectedCupcake.name}
                      className="img-fluid rounded"
                      style={{ width: "350px", height: "350px" }}
                    />

                    {/* Thumbnail Gallery */}
                    <div className="d-flex justify-content-center mt-3">
                      {selectedCupcake.thumbnailImages.map((thumb, index) => (
                        <img
                          key={index}
                          src={thumb}
                          alt={`Thumbnail ${index + 1}`}
                          className="img-thumbnail me-2"
                          style={{
                            width: "60px",
                            height: "60px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleThumbnailClick(thumb)} // Update the main image when clicked
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Section: Details */}
                  <div className="col-md-6 py-4 px-3">
                    <h4 className="fw-bold mt-3 custom-modal-site fs-6 text-muted">
                      Furry Frostings
                    </h4>
                    <h4 className="fw-bold mt-1 custom-modal-header">
                      {selectedCupcake.name}
                    </h4>
                    {/* <h5 className="text-danger fw-bold">₹{selectedCupcake.price.toFixed(2)}</h5> */}
                    <div className="product-price mb-2">
                      <span className="original-price fw-bold ">
                        ₹{selectedCupcake.originalPrice.toFixed(2)}
                      </span>
                      <span className="sale-price ms-2 fw-bold ">
                        ₹{selectedCupcake.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>

                    {/* Size Selection */}
                    <div className="mb-3 size-selection">
                      <label className="form-label fw-bold text-muted">
                        Size
                      </label>
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <input
                          type="radio"
                          name="size"
                          id="sizePack4"
                          className="btn-check"
                          autoComplete="off"
                          checked={selectedSize === "Pack of 4"}
                          onChange={() => handleSizeChange("Pack of 4")}
                        />
                        <label
                          htmlFor="sizePack4"
                          className={`btn ${selectedSize === "Pack of 4"
                            ? "btn-dark"
                            : "btn-outline-dark"
                            }`}
                          style={{
                            borderRadius: "30px",
                            padding: "0.2rem 1.3rem",
                            fontSize: "13px",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
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
                          checked={selectedSize === "Pack of 6"}
                          onChange={() => handleSizeChange("Pack of 6")}
                        />
                        <label
                          htmlFor="sizePack6"
                          className={`btn ${selectedSize === "Pack of 6"
                            ? "btn-dark"
                            : "btn-outline-dark"
                            }`}
                          style={{
                            borderRadius: "30px",
                            padding: "0.2rem 1.3rem",
                            fontSize: "13px",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                          }}
                        >
                          Pack of 6
                        </label>
                      </div>
                    </div>

                    <div className="mb-3 flavour-selection">
                      <label className="form-label fw-bold mb-2 text-muted">
                        Flavour Selection
                      </label>
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
                      <label className="form-label fw-bold mb-2 text-muted">
                        Quantity
                      </label>
                      <div className="row g-2 align-items-center">
                        {/* Input Group Column */}
                        <div className="col-12 col-md-5">
                          <div className="input-group">
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              type="button"
                              onClick={() =>
                                setQuantity((prev) => Math.max(prev - 1, 1))
                              }
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="form-control text-center"
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(Number(e.target.value))
                              }
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
                            className="btn btn-sm add-cart-button w-100 py-2 rounded-3 add-cart"
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
                  <span className="share-text">Share:</span>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/sharer/sharer.php?u=YOUR_MODAL_CONTENT_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center d-flex align-items-center"
                    style={{ color: "#1877F2", textDecoration: "none" }}
                  >
                    <i className="fab fa-facebook fa-1x"></i>
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://twitter.com/intent/tweet?url=YOUR_MODAL_CONTENT_URL&text=Check%20this%20out!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center d-flex align-items-center"
                    style={{ color: "#1DA1F2", textDecoration: "none" }}
                  >
                    <i className="fab fa-twitter fa-1x"></i>
                  </a>
                  {/* Pinterest */}
                  <a
                    href="https://pinterest.com/pin/create/button/?url=YOUR_MODAL_CONTENT_URL&media=YOUR_IMAGE_URL&description=YOUR_DESCRIPTION"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center d-flex align-items-center"
                    style={{ color: "#E60023", textDecoration: "none" }}
                  >
                    <i className="fab fa-pinterest fa-1x"></i>
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://api.whatsapp.com/send?text=Check%20this%20out:%20YOUR_MODAL_CONTENT_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center d-flex align-items-center"
                    style={{ color: "#25D366", textDecoration: "none" }}
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

export default CupCake;
