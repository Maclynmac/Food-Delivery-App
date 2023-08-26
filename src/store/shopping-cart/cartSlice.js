// This code defines a Redux slice for managing a shopping cart state using Redux Toolkit.
// It includes actions and reducers for adding, removing, and deleting items from the cart,
// as well as tracking the total quantity and total amount of items in the cart.

// Importing necessary functions from the Redux Toolkit library.
import { createSlice } from "@reduxjs/toolkit";

// Retrieving initial values for cartItems, totalAmount, and totalQuantity from local storage,
// or initializing them as empty arrays and zero if not present.
const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

// Function to update local storage with current cart items, total amount, and total quantity.
const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

// Initial state object for the cart slice.
const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

// Creating a Redux slice named "cart" using Redux Toolkit's createSlice function.
const cartSlice = createSlice({
  name: "cart",
  initialState,

  // Reducer functions for handling cart actions.
  reducers: {
    // Adding an item to the cart.
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        // If using just Redux, directly mutating the state array would be problematic.
        // However, with Redux Toolkit, direct mutations are handled correctly.
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      // Calculating the total amount for all items in the cart.
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // Updating local storage with the new cart state.
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    // Removing an item from the cart.
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      // Recalculating the total amount for all items in the cart.
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // Updating local storage with the new cart state.
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    // Deleting an item from the cart.
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      // Recalculating the total amount for all items in the cart.
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // Updating local storage with the new cart state.
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

// Exporting the action creators and the cart slice.
export const cartActions = cartSlice.actions;
export default cartSlice;
