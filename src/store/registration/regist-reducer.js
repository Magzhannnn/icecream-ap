import { ADD_USER } from "./regist-contants";

export const regReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER: {
      for (const user of state) {
        if (
          user.name === action.user.name ||
          user.email === action.user.email ||
          user.password === action.user.password
        )
          return state;
      }
      let nextUsers = [...state, action.user];
      // const prevUsers = JSON.parse(localStorage.getItem("users"));
      // if (Boolean(prevUsers)) {
      //   const users = [...prevUsers, action.user];
      //   localStorage.setItem("users", JSON.stringify(users));
      // } else {
      //   localStorage.setItem("users", JSON.stringify(nextUsers));
      // }
      return nextUsers;
    }
    default: {
      return state;
    }
  }
};
