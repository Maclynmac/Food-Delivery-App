// Importing necessary modules and styles
import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

// ProductCard component definition
const ProductCard = (props) => {
  // Destructuring properties from props.item
  const { id, title, image01, price } = props.item;
  // Getting the dispatch function from Redux
  const dispatch = useDispatch();

  // Function to add the item to the cart
  const addToCart = () => {
    // Dispatching an action to add the item to the cart
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  // JSX representing the product card
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          {/* Link to the detailed product page */}
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          {/* Displaying the product price */}
          <span className="product__price">${price}</span>
          {/* Button to add the product to the cart */}
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Exporting the ProductCard component
export default ProductCard;
