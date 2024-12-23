import React from "react";
import { useParams } from "react-router-dom";

const MiniCakeDetails = () => {
  const { id } = useParams();
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

  const minicake = minicakes.find((cake) => cake.id === parseInt(id));

  if (!minicake) {
    return <h2>MiniCake not found</h2>;
  }

  return (
    <div className="container minicake-details mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={minicake.image} alt={minicake.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{minicake.name}</h1>
          <p>Flavor: {minicake.type}</p>
          <p>Rating: {minicake.rating}</p>
          <p>
            Price: ₹{minicake.originalPrice}{" "}
            {minicake.off > 0 && <span>({minicake.off}% Off)</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniCakeDetails;
