import React from "react";

// Import necessary components and libraries
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx"; // Import the Cart component
import { useSelector } from "react-redux"; // Import react-redux's useSelector hook for accessing Redux store

// Define the Layout component
const Layout = () => {
  // Retrieve the cartIsVisible state from the Redux store
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div>
      {/* Render the Header component */}
      <Header />

      {/* Conditionally render the Cart component based on showCart */}
      {showCart && <Carts />}

      <div>
        {/* Render the main content of the application using Routes */}
        <Routes />
      </div>
      
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

// Export the Layout component
export default Layout;
