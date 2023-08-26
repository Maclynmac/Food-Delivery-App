// Import necessary modules and styles
import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css"; // Import the CSS file for styling

// Define the CommonSection component
const CommonSection = (props) => {
  return (
    // Create a section with a common__section class for styling
    <section className="common__section">
      <Container>
        {/* Display the title passed as a prop */}
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

// Export the CommonSection component as the default export
export default CommonSection;
