import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [], totalQuantity: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    replaceItem(state, action) {
      //when action.payload need . items?
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      //   const updatedTotalQuantity =
      //     state.totalQuantity + action.item.price * action.item.quantity;
      //   let updatedItems;

      state.totalQuantity++;
      state.changed = true;
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;

        // const updatedItem = {
        //   ...existingItem,
        //   quantity: existingItem.quantity + 1,
        // };
        // updatedItems = [...state.items];
        // updatedItems[existingItemIndex] = updatedItem;
      } else {
        // updatedItems =
        // when need to define the push items's properties?

        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
      //   return { items: updatedItems, totalQuantity: updatedTotalQuantity };
    },

    removeItem(state, action) {
      const newId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newId
      );
      const existingItem = state.items[existingItemIndex];

      //   const updatedTotalQuantity = state.totalQuantity - existingItem.price;
      //   let updatedItems;

      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== newId);
        // updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        // const updatedItem = {
        //   ...existingItem,
        //   quantity: existingItem.quantity - 1,
        // };
        // updatedItems = [...state.items];
        // updatedItems[existingItemIndex] = updatedItem;
      }
      //   return { items: updatedItems, totalQuantity: updatedTotalQuantity };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
