import { createSlice } from "@reduxjs/toolkit";

const toggleCartInitialState = { cartIsShown: false, showNotification: false };

const toggleCartSlice = createSlice({
  name: "showCart",
  initialState: toggleCartInitialState,
  reducers: {
    toggleCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    setShowNotify(state, action) {
      state.showNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const toggleCartActions = toggleCartSlice.actions;
export default toggleCartSlice;
