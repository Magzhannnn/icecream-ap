import {
  ADD_PRODUCTS,
  NEW_PRODUCTS,
  REMOVE_PRODUCTS,
} from "./ourProduct-constants";

export const addProducts = (title) => ({
  type: ADD_PRODUCTS,
  title,
});

export const removeProducts = (title) => ({
  type: REMOVE_PRODUCTS,
  title,
});

export const newProducts = {
  type: NEW_PRODUCTS,
};
