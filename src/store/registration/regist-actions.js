import { ADD_USER } from "./regist-contants";

export const addUser = (user) => ({
  type: ADD_USER,
  user: user,
});
