import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Wagging Tail Cake",
            image: "https://via.placeholder.com/150",
            price: 699.00,
            quantity: 1,
            description: {
                flavor: "Honey & Carrot",
                size: "300g",
            },
        },
        {
            id: 2,
            name: "Doggie Treats",
            image: "https://via.placeholder.com/150",
            price: 399.00,
            quantity: 2,
            description: {
                flavor: "Peanut Butter",
                size: "500g",
            },
        },
    ]);

    const handleQuantityChange = (id, type) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: type === "increase" ? item.quantity + 1 : item.quantity - 1,
                };
            }
            return item;
        });

        setCartItems(updatedCart);
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container my-5">
            <div className="card">
                <div className="card-header">
                    <h4>Your Cart</h4>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="row align-items-center">
                                            <div className="col-md-3 col-12 text-center">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="col-md-9 col-12">
                                                <h5>{item.name}</h5>
                                                <p className="mb-1">Rs. {item.price}</p>
                                                <p className="mb-1">Flavour: {item.description.flavor}</p>
                                                <p className="mb-1">Size: {item.description.size}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="quantity-control d-flex align-items-center">
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={() => handleQuantityChange(item.id, "decrease")}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                value={item.quantity}
                                                className="form-control mx-2 text-center"
                                                readOnly
                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={() => handleQuantityChange(item.id, "increase")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="text-center">Rs. {(item.price * item.quantity).toFixed(2)}</td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-link text-danger"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            &#128465;
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <hr />

                    <div className="d-flex justify-content-between">
                        <div className="row mt-3 col-lg-6">
                            <div >
                                <label htmlFor="specialInstructions" className="form-label">
                                    Order special instructions
                                </label>
                                <textarea
                                    id="specialInstructions"
                                    className="form-control"
                                    rows="3"
                                    placeholder="Write your instructions here..."
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-5 ">
                            <div className="col-md-12 col-12 text-md-start text-center">
                                <p className="mb-0">
                                    <strong>Estimated Total:</strong> Rs. {calculateTotal()}
                                </p>
                                <p className="text-muted mb-0">
                                    Tax included. <a href="#">Shipping</a> and discounts calculated
                                    at checkout.
                                </p>
                            </div>
                            <div className="col-md-12 col-12 text-md-end text-center mt-3 mt-md-0">
                                <button className="btn btn-primary">Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
