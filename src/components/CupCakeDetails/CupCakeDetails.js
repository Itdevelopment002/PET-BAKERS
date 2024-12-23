import React from "react";
import { useParams } from "react-router-dom";

const CupCakeDetails = () => {
  const { id } = useParams();
  const cupcakes = [
    {
      id: 1,
      name: "Pawfect Chocolate Cupcake",
      off: 50,
      originalPrice: 500,
      type: "Chocolate",
      rating: 3.5,
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
      image:
        "https://thefurrybaker.com/cdn/shop/files/Bella_Coco_Cupcake.jpg?v=1725600510&width=360",
      thumbnailImages: [
        "https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360",
        "https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360",
        "https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360",
      ],
    },
  ];

  const cupcake = cupcakes.find((cake) => cake.id === parseInt(id));

  if (!cupcake) {
    return <h2>cupcake not found</h2>;
  }

  return (
    <div className="container cupcake-details mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={cupcake.image} alt={cupcake.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{cupcake.name}</h1>
          <p>Flavor: {cupcake.type}</p>
          <p>Rating: {cupcake.rating}</p>
          <p>
            Price: ₹{cupcake.originalPrice}{" "}
            {cupcake.off > 0 && <span>({cupcake.off}% Off)</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CupCakeDetails;
