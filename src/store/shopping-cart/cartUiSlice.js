// Import the createSlice function from the @reduxjs/toolkit library
import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing the cart UI state
const cartUiSlice = createSlice({
  // Name to identify this slice in the Redux store
  name: "cartUi",
  
  // Initial state of the cart UI slice
  initialState: { cartIsVisible: false },
  
  // Reducers define how the state should change in response to actions
  reducers: {
    // Toggle action: Toggles the cart visibility state
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

// Extract the generated action creators and export them
export const cartUiActions = cartUiSlice.actions;

// Export the cartUiSlice, which includes the reducer
export default cartUiSlice;
