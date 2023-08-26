// Import React and required components/styles
import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import "../../../styles/category.css";

// Array containing category data with display names and image URLs
const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },
  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];

// Definition of the Category component
const Category = () => {
  return (
    // Container for the category items
    <Container>
      {/* Row to group the category items */}
      <Row>
        {/* Mapping through categoryData to generate individual category items */}
        {categoryData.map((item, index) => (
          // Column for each category item, adjusted based on screen size
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            {/* Container for each category item */}
            <div className="category__item d-flex align-items-center gap-3">
              {/* Container for the category image */}
              <div className="category__img">
                {/* Display the category image */}
                <img src={item.imgUrl} alt="category__item" />
              </div>
              {/* Display the category display name */}
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Export the Category component for use in other parts of the application
export default Category;
