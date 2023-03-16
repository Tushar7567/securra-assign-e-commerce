import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: JSON.parse(localStorage.getItem('cart')) ?? [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;

      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    DeleteProductFromCart: (state, action) => {
      state.quantity = 0;
      state.products.splice(0);
      state.total = 0;

      localStorage.setItem("cart", JSON.stringify(state.products));

    },
  },
});


export const { addProductToCart, DeleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;