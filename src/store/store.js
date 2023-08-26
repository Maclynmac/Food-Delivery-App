// Import the necessary functions and slices from Redux Toolkit and your project files
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice"; // Import the cartSlice reducer
import cartUiSlice from "./shopping-cart/cartUiSlice"; // Import the cartUiSlice reducer

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,     // Assign the cartSlice reducer to the 'cart' state slice
    cartUi: cartUiSlice.reducer, // Assign the cartUiSlice reducer to the 'cartUi' state slice
  },
});

// Export the configured Redux store
export default store;
