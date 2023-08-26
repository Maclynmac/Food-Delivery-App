// Import necessary modules and components
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

// Import CSS styles for the checkout page
import "../styles/checkout.css";

// Define the Checkout component
const Checkout = () => {
  // Define state variables to capture user's shipping information
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // Initialize an empty array to hold shipping information
  const shippingInfo = [];

  // Get the cart total amount from the Redux store
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  // Set a constant for shipping cost
  const shippingCost = 30;

  // Calculate the total amount including cart total and shipping cost
  const totalAmount = cartTotalAmount + Number(shippingCost);

  // Define the form submission handler
  const submitHandler = (e) => {
    e.preventDefault();
    // Create an object with user's shipping information
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    // Push the shipping information object into the shippingInfo array
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  // Render the component's JSX
  return (
    <Helmet title="Checkout">
      {/* Render a common section with a title */}
      <CommonSection title="Checkout" />

      {/* Render the main section of the checkout page */}
      <section>
        <Container>
          <Row>
            {/* Left column for shipping address form */}
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              {/* Shipping address form */}
              <form className="checkout__form" onSubmit={submitHandler}>
                {/* Input fields for user's shipping information */}
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                {/* Other input fields... */}
                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
            </Col>

            {/* Right column for order summary */}
            <Col lg="4" md="6">
              {/* Display order summary */}
              <div className="checkout__bill">
                {/* Display subtotal, shipping cost, and total amount */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

// Export the Checkout component
export default Checkout;
