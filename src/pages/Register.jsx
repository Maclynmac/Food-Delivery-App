// Import necessary modules and components
import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet"; // Assuming this is a component for setting metadata
import CommonSection from "../components/UI/common-section/CommonSection"; // Custom section title component
import { Container, Row, Col } from "reactstrap"; // Layout components
import { Link } from "react-router-dom"; // Navigation

// Define the Register component
const Register = () => {
  // Create refs to store references to input fields
  const signupNameRef = useRef(); // Ref for full name input
  const signupPasswordRef = useRef(); // Ref for password input
  const signupEmailRef = useRef(); // Ref for email input

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Here you could perform actions like validation and user registration
  };

  // JSX rendering
  return (
    <Helmet title="Signup"> {/* Set page title in metadata */}
      <CommonSection title="Signup" /> {/* Display a section title */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef} // Associate ref with full name input
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef} // Associate ref with email input
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef} // Associate ref with password input
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link> {/* Link to the login page */}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
