import React from "react";

// A custom component for managing the document title in a React application.
// This component sets the document title to a specific format that includes
// the provided title prop and a predefined text related to a food ordering app.
const Helmet = (props) => {
  // Update the document title with the specified format
  document.title = "Food ordering app - " + props.title;
  
  // Return a div element with the "w-100" class, containing the children components or content.
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
