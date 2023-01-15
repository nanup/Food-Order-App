import { configureStore } from "@reduxjs/toolkit";

import cartVisiblityReducer from "./cartVisiblity-slice";
import cartContentsReducer from "./cartContents-slice";

const store = configureStore(
  {
    reducer: {
      cartVisibility: cartVisiblityReducer,
      cartContents: cartContentsReducer
    }
  }
)

export default store;