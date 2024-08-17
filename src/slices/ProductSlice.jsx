import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    wishList: JSON.parse(localStorage.getItem("wishList") || `[]`),
    cart: JSON.parse(localStorage.getItem("cart") || `[]`),
  },
  reducers: {
    addToWishList: (state, action) => {
      if (!state.wishList.some((o) => o.id === action.payload.id)) {
        state.wishList.push(action.payload); // Thêm phần tử mới vào mảng
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
      }
    },
    addToCart: (state, action) => {
      if (!state.cart.some((o) => o.id === action.payload.id)) {
        state.cart.push(action.payload); 
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      ); // Xóa phần tử theo ID
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id); 
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

// Export các actions
export const { addToWishList, addToCart, removeFromWishList, removeFromCart } =
  productSlice.actions;

// Export reducer
export default productSlice.reducer;
