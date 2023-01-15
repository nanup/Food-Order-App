import { createSlice } from "@reduxjs/toolkit"

const initialCartVisibleState = {
  isVisible: false,
  notif: null
}

const cartVisibilitySlice = createSlice({
  name: "cartVisibility",
  initialState: initialCartVisibleState,
  reducers: {
    showCart(state) {
      state.isVisible = true
    },
    hideCart(state) {
      state.isVisible = false
    },
    setNotif(state) {
      state.notif = {}
    }
  }
});

export const cartVisibilityActions = cartVisibilitySlice.actions;

export default cartVisibilitySlice.reducer;