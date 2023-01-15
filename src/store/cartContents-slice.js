import { createSlice } from "@reduxjs/toolkit";

const initialCartContentsState = {
  items: [],
  totalAmount: 0
}

const cartContentsSlice = createSlice({
  name: "cartContents",
  initialState: initialCartContentsState,
  reducers: {
    addItem(state, action) {
      state.items.push(action);
    },
    removeFromCart() {},
    clearCart() {}
  }
})

export const cartContentsActions = cartContentsSlice.actions;

export default cartContentsSlice.reducer;