// Importing necessary modules and components
import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem"; // Assuming this is a component to render individual cart items
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice"; // Actions related to cart UI
import "../../../styles/shopping-cart.css"; // CSS styles for the shopping cart

// Definition of the Carts component
const Carts = () => {
  // Accessing Redux dispatch and selecting data from the store
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems); // Array of cart items
  const totalAmount = useSelector((state) => state.cart.totalAmount); // Total amount of items in the cart

  // Function to toggle the cart's visibility
  const toggleCart = () => {
    dispatch(cartUiActions.toggle()); // Dispatching an action to toggle cart UI state
  };

  // Rendering the cart UI
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        {/* Close button for the cart */}
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        {/* Displaying cart items */}
        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        {/* Cart subtotal and checkout button */}
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button>
            {/* Link to the checkout route */}
            <Link to="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts; // Exporting the component
