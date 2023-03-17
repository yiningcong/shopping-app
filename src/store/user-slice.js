import { createSlice } from "@reduxjs/toolkit";

const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return userInfo;
};

const userInfo = fetchUser();

const userInitialState = { user: userInfo };

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    userLogIn(state, action) {
      state.user = action.payload;
    },
    userLogout(state, action) {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
