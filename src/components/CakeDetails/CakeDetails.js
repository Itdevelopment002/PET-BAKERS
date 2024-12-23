import React from "react";
import { useParams } from "react-router-dom";

const CakeDetails = () => {
  const { id } = useParams();
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
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
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
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
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
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
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
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
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
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
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
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
      ],
    },
  ];

  const cake = cakes.find((cake) => cake.id === parseInt(id));

  if (!cake) {
    return <h2>cake not found</h2>;
  }

  return (
    <div className="container cake-details mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={cake.image} alt={cake.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{cake.name}</h1>
          <p>Flavor: {cake.type}</p>
          <p>Rating: {cake.rating}</p>
          <p>
            Price: ₹{cake.originalPrice}{" "}
            {cake.off > 0 && <span>({cake.off}% Off)</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CakeDetails;
