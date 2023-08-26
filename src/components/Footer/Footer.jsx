// Import necessary dependencies and styles
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

// Define the Footer component
const Footer = () => {
  return (
    // Footer section with container for layout
    <footer className="footer">
      <Container>
        {/* Row 1: Company Logo and Info */}
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          {/* Row 2: Delivery Time */}
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* Row 3: Contact Information */}
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 01712345678</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* Row 4: Newsletter Subscription */}
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        {/* Row 5: Copyright and Social Links */}
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <a href="https://www.facebook.com/muhib160">
                  <i className="ri-facebook-line"></i>
                </a>{" "}
              </span>
              <span>
                <a href="https://github.com/muhib160">
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span>
                {" "}
                <a href="https://www.youtube.com/c/MuhibsTechDiary">
                  <i className="ri-youtube-line"></i>
                </a>{" "}
              </span>
              <span>
                {" "}
                <a href="https://www.linkedin.com/in/muhib160/">
                  <i className="ri-linkedin-line"></i>
                </a>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Export the Footer component
export default Footer;
