// Import React and ReactDOM for building the user interface
import React from "react";
import ReactDOM from "react-dom";

// Import the main App component
import App from "./App";

// Import CSS styles for styling the app
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

// Import the Redux store and Provider for state management
import store from "./store/store";
import { Provider } from "react-redux";

// Import BrowserRouter for enabling routing
import { BrowserRouter as Router } from "react-router-dom";

// Render the app into the root HTML element
ReactDOM.render(
  // Use StrictMode for enhanced development checks
  <React.StrictMode>
    {/* Wrap the app in the Router component for routing */}
    <Router>
      {/* Provide the Redux store to the entire app */}
      <Provider store={store}>
        {/* Render the main App component */}
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  // Mount the app in the HTML element with the ID "root"
  document.getElementById("root")
);
