import { createSlice } from "@reduxjs/toolkit";

const initialCartContentsState = {
  items: [],
  totalAmount: 0
}

const cartContentsSlice = createSlice({
  name: "cartContents",
  initialState: initialCartContentsState,
  reducers: {
    addItem (state, action) {
      for (let index in state.items) {
        if (state.items[index].id === action.payload.id) {
          state.items[index].amount += action.payload.amount;
          state.totalAmount += action.payload.price;
          return;
        }
      }
      state.items.push(action.payload);
      state.totalAmount = state.totalAmount + action.payload.price;
    },
    removeItem (state, action) {
      for (let index in state.items) {
        if(state.items[index].id === action.payload) {
          state.items[index].amount -= 1;
          state.totalAmount = +state.totalAmount
          state.totalAmount -= state.items[index].price;
          if (state.items[index].amount === 0) {
            state.items.splice(index, 1)
          }
        }
      }
    },
    clearCart (state) {
      state.items = [];
    }
  }
})

export const cartContentsActions = cartContentsSlice.actions;

export default cartContentsSlice.reducer;