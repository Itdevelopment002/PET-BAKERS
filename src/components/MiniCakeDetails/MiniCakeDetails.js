// import React from "react";
// import { useParams } from "react-router-dom";

// const MiniCakeDetails = () => {
//   const { id } = useParams();
//   const minicakes = [
//     {
//       id: 1,
//       name: "Paw Shape Cake",
//       off: 30,
//       originalPrice: 999,
//       type: "Chocolate",
//       rating: 4.5,
//       image:
//         "https://thefurrybaker.com/cdn/shop/files/Oscar_DOg_Cake.jpg?v=1725601063&width=360",
//       thumbnailImages: [
//         'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
//       ],
//     },
//     {
//       id: 2,
//       name: "Wagging Tail Cake",
//       off: 0,
//       originalPrice: 699,
//       type: "Strawberry",
//       rating: 3.5,
//       image:
//         "https://thefurrybaker.com/cdn/shop/files/139B515E-370B-4485-B45C-2D93E80D7000.png?v=1730437187&width=360",
//       thumbnailImages: [
//         'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
//       ],
//     },
//     {
//       id: 3,
//       name: "Pawsome Cake",
//       off: 30,
//       originalPrice: 999,
//       type: "Vanilla",
//       rating: 5,
//       image:
//         "https://thefurrybaker.com/cdn/shop/files/Pawsome_Cake.jpg?v=1725600981&width=360",
//       thumbnailImages: [
//         'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
//       ],
//     },
//     {
//       id: 4,
//       name: "Barklicious Cake",
//       off: 0,
//       originalPrice: 749,
//       type: "Caramel",
//       rating: 3.7,
//       image:
//         "https://thefurrybaker.com/cdn/shop/files/AB65A1D0-550F-42C1-8FD3-EB9A66F29EE4.png?v=1733118383&width=360",
//       thumbnailImages: [
//         'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
//       ],
//     },
//     {
//       id: 5,
//       name: "Cute Dog Face",
//       off: 27,
//       originalPrice: 1099,
//       type: "Peanut Butter",
//       rating: 4,
//       image:
//         "https://thefurrybaker.com/cdn/shop/files/IMG-6497.png?v=1730003630&width=360",
//       thumbnailImages: [
//         'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
//       ],
//     },
//     {
//       id: 6,
//       name: "Pink Paw Cake",
//       off: 30,
//       originalPrice: 999,
//       type: "Banana",
//       rating: 2.9,
//       image:
//         "https://thefurrybaker.com/cdn/shop/files/IMG_6468_4f6fd9c2-2019-4fdd-8e93-5a7240eaddd4.jpg?v=1729876934&width=360",
//       thumbnailImages: [
//         'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
//         'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
//       ],
//     },
//   ];

//   const minicake = minicakes.find((cake) => cake.id === parseInt(id));

//   if (!minicake) {
//     return <h2>MiniCake not found</h2>;
//   }

//   return (
//     <div className="container minicake-details mt-5">
//       <div className="row">
//         <div className="col-md-6">
//           <img src={minicake.image} alt={minicake.name} className="img-fluid" />
//         </div>
//         <div className="col-md-6">
//           <h1>{minicake.name}</h1>
//           <p>Flavor: {minicake.type}</p>
//           <p>Rating: {minicake.rating}</p>
//           <p>
//             Price: ₹{minicake.originalPrice}{" "}
//             {minicake.off > 0 && <span>({minicake.off}% Off)</span>}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MiniCakeDetails;

import React, { useState } from "react";


import { useParams } from "react-router-dom";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "../CupCakeDetails/CupCakeDetails.css";

const MiniCakeDetails = () => {
  const [selectedIndex, setSelectedImage] = useState(0);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavour, setSelectedFlavour] = useState(""); // Flavour state
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedminicake, setSelectedminicake] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeStars, setActiveStars] = useState(0); // Store the active star index

  const navigate = useNavigate();



  const minicakes = [
    {
      id: 1,
      name: "Paw Shape Cake",
      off: 40,
      originalPrice: 999,
      type: "Chocolate",
      rating: 3.5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Oscar_DOg_Cake.jpg?v=1725601063&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
      description:
        "Savor the rich taste of our Pawfect Paw Shape Cake, crafted with premium ingredients for a truly indulgent chocolaty delight. Perfect for every mood and occasion!",
      moredescription:
        "Savor the irresistible richness of our Pawfect Chocolate Cupcake, a decadent creation crafted with the finest premium ingredients for a truly indulgent chocolate experience. With its moist, velvety texture and luxurious flavor, this delightful treat is perfect for elevating any mood or occasion. Let every bite take you on a journey of pure chocolaty bliss!",
      reviews: [
        {
          reviewId: 1,
          reviewName: "Akhilesh Kumar",
          reviewDate: "2024-12-20",
          reviewRating: 5,
          reviewDescription: " Absolutely loved it! The texture and taste were perfect. Will order again.",
        },
        {
          reviewId: 2,
          reviewName: "Michael Brown",
          reviewDate: "2024-12-18",
          reviewRating: 4,
          reviewDescription: "Delicious cupcake, though a bit too sweet for my liking.",
        },
        {
          reviewId: 3,
          reviewName: "Sarah Davis",
          reviewDate: "2024-12-15",
          reviewRating: 4.5,
          reviewDescription: "Amazing flavor and great presentation! Perfect for gifting.",
        },
        {
          reviewId: 4,
          reviewName: "John Smith",
          reviewDate: "2024-12-12",
          reviewRating: 5,
          reviewDescription: "The best cupcake I've ever had! Highly recommended.",
        },
      ],
    },
    {
      id: 2,
      name: "Wagging Tail Cake",
      off: 0,
      originalPrice: 699,
      type: "Strawberry",
      rating: 3.5,
      available: false,
      size: "Medium",
      image:
        "https://thefurrybaker.com/cdn/shop/files/139B515E-370B-4485-B45C-2D93E80D7000.png?v=1730437187&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
      description:
        "Indulge in the rich flavors of our Pawfect Chocolate Cupcake, made with premium ingredients for a delightful treat!",
      moredescription: "Indulge in the rich, velvety flavors of our Pawfect Chocolate Cupcake, crafted with the finest cocoa and premium ingredients for a truly decadent treat. Topped with a luscious swirl of chocolate frosting, each bite promises pure chocolate bliss. Perfect for any occasion, this delightful dessert is sure to satisfy your sweet cravings!",
      reviews: [
        {
          reviewId: 1,
          reviewName: "Abhay Don",
          reviewDate: "2024-12-20",
          reviewRating: 5,
          reviewDescription: "Absolutely loved it! The texture and taste were perfect. Will order again.",
        },
        {
          reviewId: 2,
          reviewName: "Michael Brown",
          reviewDate: "2024-12-18",
          reviewRating: 4,
          reviewDescription: "Delicious cupcake, though a bit too sweet for my liking.",
        },
        {
          reviewId: 3,
          reviewName: "Sarah Davis",
          reviewDate: "2024-12-15",
          reviewRating: 4.5,
          reviewDescription: "Amazing flavor and great presentation! Perfect for gifting.",
        },
        {
          reviewId: 4,
          reviewName: "John Smith",
          reviewDate: "2024-12-12",
          reviewRating: 5,
          reviewDescription: "The best cupcake I've ever had! Highly recommended.",
        },
      ],
    },
    {
      id: 3,
      name: "Pawsome Cake",
      off: 30,
      originalPrice: 999,
      type: "Vanilla",
      rating: 5,
      available: true,
      size: "Large",
      image:
        "https://thefurrybaker.com/cdn/shop/files/Pawsome_Cake.jpg?v=1725600981&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
      description:
        "Indulge in the rich flavors of our Pawfect Chocolate Cupcake, made with premium ingredients for a delightful treat!",
      moredescription: "Indulge in the rich, velvety flavors of our Pawfect Chocolate Cupcake, crafted with the finest cocoa and premium ingredients for a truly decadent treat. Topped with a luscious swirl of chocolate frosting, each bite promises pure chocolate bliss. Perfect for any occasion, this delightful dessert is sure to satisfy your sweet cravings!",
      reviews: [
        {
          reviewId: 1,
          reviewName: "Emily Johnson",
          reviewDate: "2024-12-20",
          reviewRating: 5,
          reviewDescription: "Absolutely loved it! The texture and taste were perfect. Will order again.",
        },
        {
          reviewId: 2,
          reviewName: "Michael Brown",
          reviewDate: "2024-12-18",
          reviewRating: 4,
          reviewDescription: "Delicious cupcake, though a bit too sweet for my liking.",
        },
        {
          reviewId: 3,
          reviewName: "Sarah Davis",
          reviewDate: "2024-12-15",
          reviewRating: 4.5,
          reviewDescription: "Amazing flavor and great presentation! Perfect for gifting.",
        },
        {
          reviewId: 4,
          reviewName: "John Smith",
          reviewDate: "2024-12-12",
          reviewRating: 5,
          reviewDescription: "The best cupcake I've ever had! Highly recommended.",
        },
      ],

    },
    {
      id: 4,
      name: "Barklicious Cake",
      off: 20,
      originalPrice: 749,
      type: "Caramel",
      rating: 3.7,
      available: true,
      size: "Large",
      image:
        "https://thefurrybaker.com/cdn/shop/files/AB65A1D0-550F-42C1-8FD3-EB9A66F29EE4.png?v=1733118383&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
      description:
        "Indulge in the rich flavors of our Pawfect Chocolate Cupcake, made with premium ingredients for a delightful treat!",
      moredescription: "Experience the ultimate indulgence with our Pawfect Chocolate Cupcake, a decadent masterpiece crafted to satisfy your sweetest desires. Made with the finest cocoa and premium ingredients, this rich, velvety treat delivers a burst of chocolate bliss in every bite. Crowned with a generous swirl of creamy chocolate frosting, it’s a dessert that combines elegance and flavor to perfection. Whether you’re celebrating a special occasion or treating yourself to a well-deserved delight, our Pawfect Chocolate Cupcake promises to make every moment unforgettable.",
      reviews: [
        {
          reviewId: 1,
          reviewName: "Emily Johnson",
          reviewDate: "2024-12-20",
          reviewRating: 5,
          reviewDescription: "Absolutely loved it! The texture and taste were perfect. Will order again.",
        },
        {
          reviewId: 2,
          reviewName: "Michael Brown",
          reviewDate: "2024-12-18",
          reviewRating: 4,
          reviewDescription: "Delicious cupcake, though a bit too sweet for my liking.",
        },
        {
          reviewId: 3,
          reviewName: "Sarah Davis",
          reviewDate: "2024-12-15",
          reviewRating: 4.5,
          reviewDescription: "Amazing flavor and great presentation! Perfect for gifting.",
        },
        {
          reviewId: 4,
          reviewName: "John Smith",
          reviewDate: "2024-12-12",
          reviewRating: 5,
          reviewDescription: "The best cupcake I've ever had! Highly recommended.",
        },
      ],

    },
    {
      id: 5,
      name: "Cute Dog Face",
      off: 27,
      originalPrice: 1099,
      type: "Peanut Butter",
      rating: 4,
      available: true,
      size: "small",
      image:
        "https://thefurrybaker.com/cdn/shop/files/IMG-6497.png?v=1730003630&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
      description:
        "Indulge in the rich flavors of our Pawfect Chocolate Cupcake, made with premium ingredients for a delightful treat!",
      moredescription: "Indulge in the rich, velvety flavors of our Pawfect Chocolate Cupcake, crafted with the finest cocoa and premium ingredients for a truly decadent treat. Topped with a luscious swirl of chocolate frosting, each bite promises pure chocolate bliss. Perfect for any occasion, this delightful dessert is sure to satisfy your sweet cravings!",
      reviews: [
        {
          reviewId: 1,
          reviewName: "Emily Johnson",
          reviewDate: "2024-12-20",
          reviewRating: 5,
          reviewDescription: "Absolutely loved it! The texture and taste were perfect. Will order again.",
        },
        {
          reviewId: 2,
          reviewName: "Michael Brown",
          reviewDate: "2024-12-18",
          reviewRating: 4,
          reviewDescription: "Delicious cupcake, though a bit too sweet for my liking.",
        },
        {
          reviewId: 3,
          reviewName: "Sarah Davis",
          reviewDate: "2024-12-15",
          reviewRating: 4.5,
          reviewDescription: "Amazing flavor and great presentation! Perfect for gifting.",
        },
        {
          reviewId: 4,
          reviewName: "John Smith",
          reviewDate: "2024-12-12",
          reviewRating: 5,
          reviewDescription: "The best cupcake I've ever had! Highly recommended.",
        },
      ],

    },
    {
      id: 6,
      name: "Pink Paw Cake",
      off: 30,
      originalPrice: 999,
      type: "Banana",
      rating: 2.9,
      available: false,
      size: "Medium",
      image:
        "https://thefurrybaker.com/cdn/shop/files/IMG_6468_4f6fd9c2-2019-4fdd-8e93-5a7240eaddd4.jpg?v=1729876934&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
      description:
        "Indulge in the rich flavors of our Pawfect Chocolate Cupcake, made with premium ingredients for a delightful treat!",
      moredescription: "Indulge in the rich, velvety flavors of our Pawfect Chocolate Cupcake, crafted with the finest cocoa and premium ingredients for a truly decadent treat. Topped with a luscious swirl of chocolate frosting, each bite promises pure chocolate bliss. Perfect for any occasion, this delightful dessert is sure to satisfy your sweet cravings!",
      reviews: [
        {
          reviewId: 1,
          reviewName: "Emily Johnson",
          reviewDate: "2024-12-20",
          reviewRating: 5,
          reviewDescription: "Absolutely loved it! The texture and taste were perfect. Will order again.",
        },
        {
          reviewId: 2,
          reviewName: "Michael Brown",
          reviewDate: "2024-12-18",
          reviewRating: 4,
          reviewDescription: "Delicious cupcake, though a bit too sweet for my liking.",
        },
        {
          reviewId: 3,
          reviewName: "Sarah Davis",
          reviewDate: "2024-12-15",
          reviewRating: 4.5,
          reviewDescription: "Amazing flavor and great presentation! Perfect for gifting.",
        },
        {
          reviewId: 4,
          reviewName: "John Smith",
          reviewDate: "2024-12-12",
          reviewRating: 5,
          reviewDescription: "The best cupcake I've ever had! Highly recommended.",
        },
      ],

    },
    // Add more cupcake objects if needed
  ];



  const minicake = minicakes.find((cake) => cake.id === parseInt(id));

  if (!minicake) {
    return <h2 className="text-center mt-5">Cupcake not found</h2>;
  }

  const discountedPrice = (
    minicake.originalPrice -
    (minicake.originalPrice * minicake.off) / 100
  ).toFixed(2);

  // const handleAddToCart = (cupcake) => {
  //   alert(`${cupcake.name} added to cart!`);
  // };
  // const handleSizeChange = (size) => {
  //   setSelectedSize(size);
  // };


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

  const handleCardClick = (id) => {
    navigate(`/minicake/${id}`);
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



  const relatedProducts = minicakes.filter((item) => item.id !== parseInt(id));
  const randomProducts = relatedProducts
    .sort(() => Math.random() - 0.5) // Shuffle the array
    .slice(0, 4); // Get the first 4 items


  const handleStarClick = (index) => {
    setActiveStars(index + 1); // Set active stars based on clicked star
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form handling logic here
    console.log("Review submitted!");
  };


  return (
    <div className="container cupcake-details">
      <div className="row">
        {/* Left Section: Thumbnail Images */}
        <div className="col-md-5">
          <div className="d-flex align-items-start">
            {/* Thumbnail Gallery */}
            <div className="thumbnail-gallery me-3">
              {minicake.thumbnailImages.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${index === selectedIndex ? "active" : ""}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="main-image">
              <img
                src={minicake.thumbnailImages[selectedIndex]}
                alt={minicake.name}
                className="img-fluid"
              />
            </div>
          </div>
        </div>


        {/* Right Section: Cupcake Details */}
        <div className="col-md-7">
          <div className="details">
            <h2 className="fw-bold mt-3 custom-modal-site fs-5 text-muted">
              Furry Frostings
            </h2>
            <h1 className="product-title">{minicake.name}</h1>
            <div className="price-section">
              <span className="original-price-details">₹{minicake.originalPrice}</span>
              <span className="discounted-price">₹{discountedPrice}</span>
              <span className="free-shipping">& Free Shipping</span>
            </div>
            <p className="product-description">{minicake.description}</p>

            <div className="mb-3 size-selection">
              <label className="form-label fw-bold text-muted">
                Size
              </label>
              <div className="d-flex justify-content-start align-items-center gap-2">
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

            <div className="mb-3 Quantity-selection">
              <label className="form-label fw-bold mb-2 text-muted">
                Quantity
              </label>
              <div className="row g-2 align-items-center">
                {/* Quantity Selection */}
                <div className="col-5 col-sm-6 col-md-6 col-lg-2">
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

                {/* Add to Cart Button */}
                <div className="col-7 col-sm-6 col-md-6 col-lg-3">
                  <button
                    className="btn btn-sm add-cart-button w-100 py-2 rounded-3"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>


            </div>
            <ul className="guarantee-list">
              <li><strong>Free shipping on orders over $50!</strong></li>
              <li>✅ No-Risk Money Back Guarantee!</li>
              <li>✅ No Hassle Refunds</li>
              <li>✅ Secure Payments</li>
            </ul>

            {/* <div className="payment-icons">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Visa_Logo.png"
                alt="Visa"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/16/MasterCard_Logo.svg"
                alt="MasterCard"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/American_Express_logo_%282018%29.svg"
                alt="American Express"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Discover_Card_logo.svg"
                alt="Discover"
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="container my-5">
        {/* Navigation Tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link description active"
              id="description-tab"
              data-bs-toggle="tab"
              href="#description"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link reviews"
              id="reviews-tab"
              data-bs-toggle="tab"
              href="#reviews"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              Reviews ({minicake.reviews.length})
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content mt-4">
          {/* Description Tab */}
          <div
            id="description"
            className="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <p className="description-text">{minicake.moredescription}</p>
          </div>

          {/* Reviews Tab */}
          <div
            id="reviews"
            className="tab-pane fade show"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <ul
              className="list-group review-text custom-scrollbar"
              style={{
                maxHeight: "300px", // Adjust height based on your UI needs
                overflowY: minicake.reviews && minicake.reviews.length > 3 ? "auto" : "visible", // Add scroll if more than 3 reviews
              }}
            >
              {minicake.reviews && minicake.reviews.length > 0 ? (
                minicake.reviews.map((review) => ( // Show only first 3 reviews
                  <li
                    key={review.reviewId}
                    className="list-group-item border-0 mb-3 p-3 shadow-sm rounded"
                  >
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <img
                          src={review.avatar || "https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"} // Default avatar if none
                          alt={review.reviewName || "Anonymous"}
                          className="rounded-circle"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">{review.reviewName || "Anonymous"}</h6>
                        <small className="text-muted">
                          Posted on {new Date(review.reviewDate).toLocaleDateString()}
                        </small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-2">{renderStars(review.reviewRating)}</span>
                      <span className="text-muted">{review.reviewRating.toFixed(1)}</span>
                    </div>
                    <p className="mb-0">{review.reviewDescription}</p>
                  </li>
                ))
              ) : (
                <li className="list-group-item border-0 mb-3 p-3 shadow-sm rounded text-center">
                  No reviews available for this minicake.
                </li>
              )}
            </ul>


            <form className="review-form mt-5" onSubmit={handleSubmit}>
              <h4>Be the first to review “White Flower Bouquet”</h4>
              <p className="text-muted">Your email address will not be published. Required fields are marked *</p>

              <div className="mb-3">
                <label htmlFor="rating" className="form-label">Your rating *</label>
                <div className="review-form">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${index < activeStars ? 'active' : ''}`} // Apply 'active' class if the star index is less than activeStars
                      onClick={() => handleStarClick(index)} // Set active stars when clicked
                    >
                      ★
                    </span>
                  ))}
                </div>

              </div>

              <div className="mb-3">
                <label htmlFor="review" className="form-label">Your review *</label>
                <textarea
                  id="review"
                  className="form-control custom-input "
                  rows="4"
                  required
                  placeholder="Enter your review ..."
                ></textarea>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input type="text" id="name" className="form-control custom-input" placeholder="Enter name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input type="email" id="email" className="form-control custom-input" placeholder="Enter email" required />
                </div>
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input " id="saveInfo" />
                <label className="form-check-label" htmlFor="saveInfo">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              <button type="submit" className="btn btn-danger">Submit</button>
            </form>
          </div>
        </div>
      </div>


      <div className="container my-5">
        <div className="shop-title-container mb-3">
          <div className="line-wrapper">
            <div className="line full-width"></div>
            <div className="line small-width"></div>
          </div>
          <h1 className="related-products-title text-center mb-4">Related Products</h1>
          <div className="line-wrapper">
            <div className="line full-width"></div>
            <div className="line small-width"></div>
          </div>
        </div>
        {/* <div className="row">
          {randomProducts.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card product-card">
                <img src={product.image} className="card-img-top" alt={product.name} />
              </div>
            </div>
          ))}
        </div> */}
        <div className="row">
          {randomProducts.map((minicake) => {
            const price =
              minicake.off > 0
                ? minicake.originalPrice -
                (minicake.originalPrice * minicake.off) / 100
                : minicake.originalPrice;

            return (
              <div
                key={minicake.id}
                className=" col-lg-3 col-md-4 col-sm-6 col-12 mb-4 "
              >
                <div
                  className="card product-card"
                  onClick={() => handleCardClick(minicake.id)}
                  style={{ cursor: "pointer" }}
                >
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
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(minicake)
                          }}
                        />
                        <span className="tooltip-text">Add to Cart</span>
                      </div>
                      <div className="tooltip-container">
                        <FaEye
                          className="icon view-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleView(minicake)
                          }}
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


      </div>

    </div >
  );
};

export default MiniCakeDetails;
