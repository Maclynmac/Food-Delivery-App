// Import necessary modules and styles
import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

// Define the CartItem component
const CartItem = ({ item }) => {
  // Destructure properties from the 'item' object
  const { id, title, price, image01, quantity, totalPrice } = item;

  // Initialize the Redux dispatch function
  const dispatch = useDispatch();

  // Function to increment the quantity of the item in the cart
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  // Function to decrease the quantity of the item in the cart
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  // Function to delete the item from the cart
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  // Render the CartItem component
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        {/* Display the product image */}
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            {/* Display product title and price */}
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            {/* Buttons to increase and decrease item quantity */}
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          {/* Button to delete the item */}
          <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

// Export the CartItem component
export default CartItem;

