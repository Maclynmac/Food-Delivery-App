// Import necessary modules and components
import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Define the Login component
const Login = () => {
  // Create refs to capture user input in email and password fields
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // TODO: Add logic to authenticate user using captured input
  };

  return (
    // Component rendering starts here
    <Helmet title="Login"> {/* Set page title using Helmet component */}
      <CommonSection title="Login" /> {/* Display common section with title */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef} // Bind email input to ref
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef} // Bind password input to ref
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              {/* Link to registration page */}
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
    // Component rendering ends here
  );
};

export default Login; // Export the Login component
