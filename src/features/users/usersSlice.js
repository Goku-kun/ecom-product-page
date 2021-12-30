import { createSlice } from "@reduxjs/toolkit";

var uniqueId = 0;

var options = {
  name: "users",
  initialState: [
    {
      id: 0,
      name: "Default User",
      displayPicture: "images/image-avatar.png",
    },
  ],
  reducers: {
    addUser(state, action) {
      return state.push({
        id: uniqueId++,
        ...action.payload,
      });
    },
    removeUser(state, action) {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
};

var userSlice = createSlice(options);

export function selectUsers(state) {
  return state.users;
}

export function selectDefaultUser(state) {
  return state.users.find((user) => user.id === 0);
}

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
