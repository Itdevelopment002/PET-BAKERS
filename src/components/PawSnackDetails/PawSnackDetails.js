import React from "react";
import { useParams } from "react-router-dom";

const PawSnackDetails = () => {
  const { id } = useParams();
  const pawsnacks = [
    {
      id: 1,
      name: "Personalized Doggo Face cookies",
      off: 10,
      originalPrice: 149,
      type: "Chocolate",
      rating: 4.5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Personalized_Face_Cookies.jpg?v=1725600910&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
    },
    {
      id: 3,
      name: "Puppy Trail Pizza",
      off: 45,
      originalPrice: 320,
      type: "Vanilla",
      rating: 5,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Pizza_For_Dogs.jpg?v=1725600946&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
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
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
    },
    {
      id: 6,
      name: "Woof You Donuts",
      off: 10,
      originalPrice: 849,
      type: "Banana",
      rating: 2.9,
      image:
        "https://thefurrybaker.com/cdn/shop/files/Woof_Donuts.jpg?v=1725600867&width=360",
      thumbnailImages: [
        'https://thefurrybaker.com/cdn/shop/files/FloweCupcake.jpg?v=1721821133&width=360',
        'https://thefurrybaker.com/cdn/shop/files/dog-face_Cupcakes.jpg?v=1725601359&width=360',
        'https://thefurrybaker.com/cdn/shop/files/cupcake.jpg?v=1715335098&width=360',
      ],
    },
  ];

  const pawsnack = pawsnacks.find((pawsnack) => pawsnack.id === parseInt(id));

  if (!pawsnack) {
    return <h2>MiniCake not found</h2>;
  }

  return (
    <div className="container minicake-details mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pawsnack.image} alt={pawsnack.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{pawsnack.name}</h1>
          <p>Flavor: {pawsnack.type}</p>
          <p>Rating: {pawsnack.rating}</p>
          <p>
            Price: ₹{pawsnack.originalPrice}{" "}
            {pawsnack.off > 0 && <span>({pawsnack.off}% Off)</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PawSnackDetails;
