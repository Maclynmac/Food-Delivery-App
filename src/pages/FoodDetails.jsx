import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products"; // Import product data
import { useParams } from "react-router-dom"; // Import routing tools
import Helmet from "../components/Helmet/Helmet"; // Import Helmet component for page title
import CommonSection from "../components/UI/common-section/CommonSection"; // Import UI components
import { Container, Row, Col } from "reactstrap"; // Import UI components
import { useDispatch } from "react-redux"; // Import Redux hook
import { cartActions } from "../store/shopping-cart/cartSlice"; // Import cart actions
import "../styles/product-details.css"; // Import CSS styles
import ProductCard from "../components/UI/product-card/ProductCard"; // Import UI component

const FoodDetails = () => {
  const [tab, setTab] = useState("desc"); // State for active tab
  const [enteredName, setEnteredName] = useState(""); // State for entered name in review form
  const [enteredEmail, setEnteredEmail] = useState(""); // State for entered email in review form
  const [reviewMsg, setReviewMsg] = useState(""); // State for entered review message
  const { id } = useParams(); // Extract product ID from URL parameters
  const dispatch = useDispatch(); // Initialize Redux dispatch

  // Find the product object based on the extracted ID
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01); // State for selected image
  const { title, price, category, desc, image01 } = product; // Destructure product details

  // Filter related products with the same category
  const relatedProduct = products.filter((item) => category === item.category);

  // Function to add the current product to the cart
  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  // Handle review form submission
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };

  // Update preview image when the selected product changes
  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  // Scroll to the top of the page when the selected product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details"> {/* Set page title */}
      <CommonSection title={title} /> {/* Display common section with product title */}

      <section>
        <Container>
          <Row>
            {/* Display image slider */}
            <Col lg="2" md="2">
              <div className="product__images ">
                {/* Clicking on images updates the preview image */}
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                {/* Additional images */}
              </div>
            </Col>

            {/* Display main product image */}
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            {/* Display product details */}
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>

                {/* Add to cart button */}
                <button onClick={addItem} className="addTOCart__btn">
                  Add to Cart
                </button>
              </div>
            </Col>

            {/* Tab switcher for description and review */}
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                {/* Clicking on tabs updates the active tab */}
                <h6
                  className={` ${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={` ${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {/* Display description or review form based on active tab */}
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  {/* Existing reviews */}
                  {/* Review form */}
                  <form className="form" onSubmit={submitHandler}>
                    {/* Form inputs for name, email, and review */}
                    <button type="submit" className="addTOCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            {/* Display related products */}
            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>
            {/* Display related products using ProductCard component */}
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
