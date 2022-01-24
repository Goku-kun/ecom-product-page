import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "user",
  initialState: {
    id: 0,
    name: "Default User",
    displayPicture: "images/image-avatar.png",
  },

  reducers: {
    setUser(state, action) {
      state = action.payload;
      return state;
    },
  },
};

const userSlice = createSlice(options);

export function selectDefaultUser(state) {
  return state.user;
}

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
